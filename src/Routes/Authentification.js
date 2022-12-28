import logo from '../Assets/logo.png'
import illustration from '../Assets/test.jpg'
import google from '../Assets/google.png'
import linkedin from '../Assets/linkedin.png'
import "../Styling/App.scss"
import "../Styling/Authentification.scss"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'


function Authentification() {

    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    async function login() {
        try {
          return fetch("http://localhost:8333/user", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              password: password,
              email: email
            })
          }
          ).then((res) => res.json())
          
        }
        catch (e) {
          console.log("wrong password");
        }
      }

    return (
      <div className="Authentification p-5">
        <img className='logo' src={logo} alt="logo"/>
        <div className='container p-4' style={{display: "flex", justifyContent: "start"}}>
            <img className='illustration' src={illustration} alt='illustration' /> 
            <div className='Form p-5'>

                <div style={{fontSize: "30px", fontWeight: "bold"}}>Authentification</div>
                <p>Please enter your email and password in order to connect</p>

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
                        <Form.Control onChange={(e) => setEmail(e.target.value)} style={{borderRadius: "none"}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} style={{borderRadius: "none"}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={login} variant="primary" type="submit" style={{width: "100%", marginTop: "30px"}}>Login</Button>
                </Form>

                <p style={{marginTop: "10px"}}>Don't have an account? <Link to="/signin" style={{fontWeight: "bold", color: "#00C9A7"}}>Sign up here</Link></p>
            </div>
        </div>
      </div>
    );
  }
  
export default Authentification;