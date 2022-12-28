import Card from "../Components/JobCard"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function JobsPicked(){

    const url = "http://localhost:8333/jobs"
    const [jobs, setJobs] = useState([]);
    const spinner = (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
     
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

    return(
        <div className="JobsPicked Container mt-5" >
            <div style={{width:"70%"}}>
                <h3>Jobs Picked For You</h3>
                <p style={{marginTop: "-10px"}}>These are the latest jobs matching your interests.</p>
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
}export default JobsPicked;