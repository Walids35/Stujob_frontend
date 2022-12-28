import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import "../Styling/App.scss";
import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function JobCard( { elt } ) {

  const handle = () => {
    console.log(company);
  };

  const url = "http://localhost:8333/company/" + elt.company_id;
  const [company,setCompany] = useState({});

  useEffect(() => {
    axios
        .get(url)
        .then((res) => {
            setCompany(res.data.company[0]);
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

  return (
          <Card className="jobcard cardshadow" style={{ width: '20rem', height:"14rem" }}>
            <Card.Body>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <Image
                  style={{ height:"auto", width: "50px", marginLeft:"-5px"}}
                  src={company.image}
                ></Image>
                <Image
                  style={{cursor:"pointer"}}
                  src="saved.svg"
                ></Image>
              </div>
              <Card.Title style={{marginTop:"10px"}}>{elt.name}</Card.Title>
              <Card.Text style={{marginTop:"-10px"}}>{company.name}</Card.Text>
              <div style={{display:"flex", alignItems:"flex-start", marginTop:"-5px"}}>
                <img onClick={handle} src="location.svg" alt="location" style={{marginRight:"5px"}} ></img>
                <p> {elt.location}</p>
              </div>
              <div style={{display:"flex", alignItems:"flex-start", marginTop:"-5px"}}>
                <img src="expire.svg" alt="location" style={{marginRight:"5px"}} ></img>
                <p> Apply by {elt.expire}</p>
                <Nav.Link href="/view"><Button style={{marginLeft: "20px"}} variant="outline-success" size="sm">View</Button></Nav.Link>
              </div>
            </Card.Body>
          </Card>
  );
}
export default JobCard;
