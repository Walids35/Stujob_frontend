import Navbar from "../Components/MyNavbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../Components/JobCard";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function MyApplications({ user }) {

  const url = "http://localhost:8333/jobs"
  const [jobs, setJobs] = useState([]);
   
  useEffect(() => {
      axios
          .get(url)
          .then((res) => {
              setJobs(res.data.job);
              console.log(res)
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);

  return (
    <>
      <Navbar user={user}/>
      
      <div style={{ marginTop: "120px", padding: "0px 100px" }}>
      <ButtonGroup>
            <Button href="/jobs">Job Search</Button>
            <Button href="/myapplications">My Applications</Button>
            <Button href="/saved">Saved</Button>
        </ButtonGroup>
        <h5 style={{marginTop:"50px"}}>My Applications</h5>
        <hr></hr>
        <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
          <Row xs={1} md={3} className="g-4">
            {jobs.map((elt) => (
              <Col>
                <Card key={elt.id} elt={elt} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
export default MyApplications;
