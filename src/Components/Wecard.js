import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function Wecard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="workexperiencecard">
          <hr></hr>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                  <h6 style={{ fontWeight: "600" }}>Front-end development</h6>
                  <p style={{ marginTop: "-10px" }}>VERMEG</p>
              </div>
              <Image style={{cursor:"pointer"}} onClick={handleShow} width={"3%"} src="edit.svg" alt="editbtn"></Image>
          </div>
          <p style={{marginTop:"-15px"}}>Tunis, Tunisia</p>
          <p style={{marginTop:"-20px"}}>2 months</p>
          <p style={{marginTop:"-20px"}}>Development of front-end application with VueJS and Vuetify</p>
          <hr></hr>
      </div>

      {/**Overlay to edit work experience */}
      <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
            <Modal.Title>Front-end development</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Control type="text" placeholder="Title" value="Front-end development" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Company">
                    <Form.Control type="text" placeholder="Company" value="VERMEG" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Location">
                    <Form.Control type="text" placeholder="Location" value="Tunis, Tunisia" />
                </Form.Group>
                
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Form.Group className="mb-3" controlId="From">
                        <Form.Control type="text" placeholder="From" value="25/12/2021" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="To">
                        <Form.Control type="text" placeholder="To" value="25/02/2022" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Control placeholder='Description' as="textarea" rows={3} value="Development of front-end application with VueJS and Vuetify" />
                    <Form.Text> Max 100 characters</Form.Text>
                </Form.Group>

            </Form>
            <Button variant="danger" onClick={handleClose}>
                Delete
            </Button>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
} export default Wecard;
