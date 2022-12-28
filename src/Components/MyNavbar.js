import logo from "../Assets/logo.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import "../Styling/Navbar.css"

function MyNavbar( { user }) {
    return (
        <>
            <Navbar bg="light" variant="light"  fixed="top">
                    <img className="logo" src={logo} alt="logo"/>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/jobs">Job</Nav.Link>
                        <Nav.Link href="/internships">Internships</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/profile"><Navbar.Text>Hi, { user.fullname } </Navbar.Text></Nav.Link>
                        <Image className="imageprofile" src="profile.jpg" alt="profile" roundedCircle></Image>
                    </Navbar.Collapse>
                   
            </Navbar>
        </>
    )
} export default MyNavbar; 