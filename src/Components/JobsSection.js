import Button from "react-bootstrap/Button";
import Jobcard from "../Components/JobCard";
import JobCardInfo from "../Components/JobCardInfo"
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function JobsSection(){
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
        <div style={{ display: "flex" }}>
            {/*LEFT COLUMN*/}
            <div
              style={{
                width: "24.5rem",
                marginTop: "30px",
                padding: "10px",
                border: "1px solid grey",
                height:"700px",
                overflowY:"auto"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "5px",
                }}
              >
                <Button variant="outline-dark">Filter</Button>
              </div>

              {jobs.length === 0 ? spinner : jobs.map((elt) => (
                    <div style={{marginBottom:"20px"}}>
                        <Jobcard
                            key={elt.id}
                            elt={elt}
                        />
                    </div>
                ))}

            </div>

            {/**RIGHT COLUMN */}
            <div
              style={{
                width: "80%",
                marginTop: "30px",
                padding: "40px 60px",
                border: "1px solid grey",
                height:"700px",
                overflowY:"auto"
              }}
            >
                  <JobCardInfo />
            </div>

          </div>
    )
} export default JobsSection;