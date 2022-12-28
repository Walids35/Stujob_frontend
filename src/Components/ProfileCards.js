import "../Styling/App.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProfileCards({ user }) {
  return (
    <div className="ProfileCards Container">
      {/*Your profile is Completed Card*/}
      <Card className="cardshadow" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>
            <Image
              style={{ width: "10%", marginRight: "15px" }}
              src="profile.jpg"
              roundedCircle
            ></Image>
            Your profile is <span style={{ fontWeight: "bold" }}>{ user.iscompleted } %</span>{" "}
            completed
          </Card.Title>
          <Card.Text>
            <ProgressBar variant="black" now={40} />
          </Card.Text>
          <Button variant="primary" href="/profile">Go Profile</Button>
        </Card.Body>
      </Card>
      {/*Applied Job*/}
      <Card
        className="cardshadow text-center purpleborder"
        style={{ width: "15rem" }}
      >
        <Card.Body>
          <Card.Img variant="top" src="document.svg" style={{ width: "20%" }} />
          <Card.Title
            style={{ fontSize: "30px", fontWeight: "bold", marginTop: "5px" }}
          >
            {user.appliedJobs}
          </Card.Title>
          <Card.Text
            style={{ fontSize: "20px", fontWeight: "500", marginTop: "-5px" }}
          >
            Applied Jobs
          </Card.Text>
        </Card.Body>
      </Card>
      {/*Incomplete Job*/}
      <Card
        className="cardshadow text-center greenborder"
        style={{ width: "15rem" }}
      >
        <Card.Body>
          <Card.Img variant="top" src="clock.svg" style={{ width: "20%" }} />
          <Card.Title
            style={{ fontSize: "30px", fontWeight: "bold", marginTop: "5px" }}
          >
            { user.incompletedJobs }
          </Card.Title>
          <Card.Text
            style={{ fontSize: "20px", fontWeight: "500", marginTop: "-5px" }}
          >
            Incompleted Jobs
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProfileCards;
