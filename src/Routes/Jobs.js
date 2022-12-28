import Navbar from "../Components/MyNavbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import JobsSection from "../Components/JobsSection"

function jobs({user}) {
  return (
    <>
      <Navbar user={ user }/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "120px", width: "85%", marginBottom:"50px" }}>
          <ButtonGroup>
            <Button href="/jobs">Job Search</Button>
            <Button href="/myapplications">My Applications</Button>
            <Button href="/saved">Saved</Button>
          </ButtonGroup>
          <JobsSection />
        </div>
      </div>
    </>
  );
}
export default jobs;
