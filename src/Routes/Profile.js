import Navbar from '../Components/MyNavbar'
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import Wecard from "../Components/Wecard"
import SkillCard from '../Components/SkillCard';
import "../Styling/App.scss"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';

function Profile ( { user }){

    const [value, setValue] = useState(2);

    {/**Experience constants */}
    const [showExperience, setShowExperience] = useState(false);
    const handleCloseExperience = () => setShowExperience(false);
    const handleShowExperience = () => setShowExperience(true);

    {/**Skill constants */}
    const [showSkill, setShowSkill] = useState(false);
    const handleCloseSkill = () => setShowSkill(false);
    const handleShowSkill= () => setShowSkill(true);

    {/**profile constants */}
    const [showProfile, setShowProfile] = useState(false);
    const handleCloseProfile = () => setShowProfile(false);
    const handleShowProfile= () => setShowProfile(true);

    return(
        <>
          <Navbar user={user}/>
          <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{margin:"150px 0px" ,display:"flex",justifyContent:"space-between", width:"85%", height:"100%"}}>
                {/**Left Column */}
                <div style={{width:"30%"}}>
                    <Card className="jobcard cardshadow text-center" style={{ width: '25rem', height:"100%" }}>
                        <div style={{display:"flex",justifyContent:"flex-end", marginTop:"20px", marginRight:"20px"}}><Image style={{cursor:"pointer"}} onClick={handleShowProfile} width={"6%"} src='edit.svg' alt="editbtn"></Image></div>
                        <Card.Body>
                        <Image
                        style={{ width: "30%", marginLeft:"-5px"}}
                        src="profile.jpg"
                        roundedCircle
                        alt="profile"
                        ></Image>
                        <Card.Title style={{marginTop:"10px",fontWeight:"600"}}>Walid Siala</Card.Title>
                        <Card.Text style={{marginTop:"-10px"}}><a className='cv' href='profile.jpg'>CV</a></Card.Text>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <p>Linkedin</p>
                            <p>Email</p>
                            <p>Phone</p>
                        </div>
                        <hr style={{marginTop:"-10px"}}></hr>
                        <div className='profiledetails'>
                            <p>Senior Software engineer</p>
                            <p>Interested in: part-time</p>
                            <p>Open to remote work: yes</p>
                            <p>Mediterranean School of Technology</p>
                            <p>Tunis, Tunisia</p>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                {/**RIGHT COLUMN */}
                <div style={{width:"65%"}}>
                    <Card className="jobcard cardshadow" style={{ width: "100%", padding:"50px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <div>   
                                <h5 style={{fontWeight:"700"}}>Work Experience</h5>   
                                <p style={{marginTop:"-10px"}}>Tell us more about your prior jobs. These will help us pitch you to great employers.</p> 
                            </div>
                            <div>
                                <Button onClick={handleShowExperience} variant="outline-success">Add Experience</Button>
                            </div>
                        </div>
                        <Wecard />
                        <div style={{display:"flex", marginTop:"30px", justifyContent:"space-between"}}>
                            <div>   
                                <h5 style={{fontWeight:"700"}}>Skills</h5>   
                                <p style={{marginTop:"-10px"}}>Tell us more about your skills.</p> 
                            </div>
                            <div>
                                <Button onClick={handleShowSkill} variant="outline-success">Add Skill</Button>
                            </div>
                        </div>
                        <SkillCard />
                    </Card>
                </div>
            </div>
        </div>

        {/**Overlay to add work experience */}
        <Modal show={showExperience} onHide={handleCloseExperience} centered>
            <Modal.Header closeButton>
            <Modal.Title>Add Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Company">
                    <Form.Control type="text" placeholder="Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Location">
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>
                
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Form.Group className="mb-3" controlId="From">
                        <Form.Control type="text" placeholder="From" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="To">
                        <Form.Control type="text" placeholder="To" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Control placeholder='Description' as="textarea" rows={3} />
                    <Form.Text> Max 100 characters</Form.Text>
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="outline-dark" onClick={handleCloseExperience}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseExperience}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>

        {/**Overlay to add work experience */}
        <Modal show={showSkill} onHide={handleCloseSkill} centered>
            <Modal.Header closeButton>
            <Modal.Title>Add Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <h6>Rating</h6>
                    <Rating
                    name="simple-controlled"
                    precision={0.5}
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    />
            </Form>
            
            </Modal.Body>
            
            <Modal.Footer>
            
            <Button variant="outline-dark" onClick={handleCloseSkill}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseSkill}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>

                {/**Overlay to edit profile */}
                <Modal show={showProfile} onHide={handleCloseProfile} centered>
            <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Control type="text" placeholder="Title" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Linkedinprofile">
                    <Form.Control type="text" placeholder="Linkedin profile URL" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="Emailprofile">
                    <Form.Control type="text" placeholder="Email profile URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ActualPosition">
                    <Form.Control type="text" placeholder="Actual Position" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="University">
                    <Form.Control type="text" placeholder="University" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="City">
                    <Form.Control type="text" placeholder="City" />
                </Form.Group>

            </Form>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="outline-dark" onClick={handleCloseProfile}>
                Close
            </Button>
            <Button variant="primary" onClick={handleCloseProfile}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
} export default Profile;