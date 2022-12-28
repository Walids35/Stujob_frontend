import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

function JobCardInfo(){
    return(
        <>
            <Image
                    style={{ width: "15%", marginLeft:"-5px"}}
                    src="companylogo.svg"
                  ></Image>
                    <h2 style={{marginTop:"15px", fontSize:"25px", fontWeight:"700"}}>Technician Manager</h2>
                    <Card.Text style={{color:"#00A488", fontWeight:"700"}}>Pepsi</Card.Text>
                    <div style={{display:"flex", alignItems:"flex-start", marginTop:"-5px"}}>
                      <img src="clockblack.svg" alt="location" style={{marginRight:"5px"}} ></img>
                      <p> Part-time</p>
                    </div>
                    <div style={{display:"flex", alignItems:"flex-start", marginTop:"-5px"}}>
                      <img src="location.svg" alt="location" style={{marginRight:"5px"}} ></img>
                      <p> Tunisia</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between", marginTop:"-5px"}}>
                      <div style={{display:"flex", alignItems:"flex-start"}}>
                        <img src="expire.svg" alt="location" style={{marginRight:"5px"}} ></img>
                        <p> Apply by 20 November 2022</p>
                      </div>
                      <div style={{display:"flex",flexDirection:"column", justifContent:"baseline"}}>
                        <Button>Apply Now</Button>
                        <p className="mt-1" style={{color:"#00A488"}}>14 has already applied</p>
                      </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div style={{width:"50%"}}>
                        <h5>Job Description</h5>
                        <p>Responsible for working alongside managers and accepting delegated responsibilities and duties with the goal of eventually becoming a manager.<br /><br /> The trainee will rotate to different company departments to learn all company functions, policies, and staff duties, contribute to strategic planning and help evaluate department performance (e.g. analysing, writing reports).<br /><br /> Responsible for working alongside managers and accepting delegated responsibilities and duties with the goal of eventually becoming a manager. The trainee will rotate to different company departments to learn all company functions, policies, and staff duties, contribute to strategic planning and help evaluate department performance (e.g. analysing, writing reports). Responsible for working alongside managers and accepting delegated responsibilities and duties with the goal of eventually becoming a manager. The trainee will rotate to different company departments to learn all company functions, policies, and staff duties, contribute to strategic planning and help evaluate department performance (e.g. analysing, writing reports).</p>
                      </div>
                      <div >
                        <h5>Must have skills</h5>
                        <ul style={{fontSize:"15px", marginTop:"10px"}}>
                          <li>Public Speaking</li>
                          <li>Empathy</li>
                          <li>Problem Solving</li>
                        </ul>
                      </div>
                    </div>
        </>
    )
} export default JobCardInfo;