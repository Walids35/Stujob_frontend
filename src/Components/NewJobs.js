import Card from "../Components/JobCard"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function NewJobs( { list }){
    
    const urljobs = "http://localhost:8333/jobs"
    const [jobs, setJobs] = useState([]);
    const spinner = (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
     
    useEffect(() => {
        axios
            .get(urljobs)
            .then((res) => {
                setJobs(res.data.job);
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return(

        <div className="JobsPicked Container mt-5 mb-5" >
            <div style={{width:"70%"}}>
                <h3>New & noteworthy</h3>
                <p style={{marginTop: "-10px"}}>Check out the latest resources and content we have for you.</p>
                <Row xs={1} md={3} className="g-4">
                     {jobs.length === 0 ? spinner : jobs.map((elt) => (
                    <Col>
                        <Card
                            key={elt.id}
                            elt={elt}
                        />
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    )
}export default NewJobs;