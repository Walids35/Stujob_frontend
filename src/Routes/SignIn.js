import logo from '../Assets/logo.png'
import illustration from '../Assets/test.jpg'
import google from '../Assets/google.png'
import linkedin from '../Assets/linkedin.png'
import "../Styling/App.scss"
import "../Styling/Authentification.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Authentification() {
    return (
      <div className="Authentification p-5">
        <img className='logo' src={logo} alt="logo"/>
        <div className='container p-4' style={{display: "flex", justifyContent: "start"}}>
            <img className='illustration' src={illustration} alt='illustration' /> 
            <div className='Form p-5'>

                <div style={{fontSize: "30px", fontWeight: "bold"}}>SignIn</div>
                <p>Please fill the form or connect with your Google Account</p>

                <div className='connectLabel' style={{display: "flex", justifyContent: "space-between"}}>
                    <div className='googleblock py-2 m-1' style={{display: "flex", justifyContent: "center", backgroundColor: "#E9E9E9"}}>
                        <img src={google} alt="Google Logo" style={{width: "10%",}}/>
                    </div>
                    <div className='linkedin py-2 m-1' style={{display: "flex", justifyContent: "center", backgroundColor: "#E9E9E9"}}>
                        <img src={linkedin} alt="Google Logo" style={{width: "10%"}}/>
                    </div>
                </div>

                <p style={{textAlign: "center", marginTop: "5px"}}>or</p>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control style={{borderRadius: "none"}} type="email" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control style={{borderRadius: "none"}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{borderRadius: "none"}} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{borderRadius: "none"}} type="password" placeholder="Confirm password" />
                    </Form.Group>

                    <Link to="/home"><Button  variant="primary" type="submit" style={{width: "100%", marginTop: "30px"}}>Sign In</Button></Link>
                </Form>

                <p style={{marginTop: "10px"}}>Already have an account? <Link to="/" style={{fontWeight: "bold", color: "#00C9A7"}}>Login In here</Link></p>

            </div>
        </div>
      </div>
    );
  }
  
export default Authentification;