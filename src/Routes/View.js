import Navbar from "../Components/MyNavbar"
import JobCardInfo from "../Components/JobCardInfo"

function View(){
    return(
        <>
            <Navbar />
            <div
              style={{
                marginTop: "150px",
                padding: "0px 200px",
                paddingBottom:"100px"
              }}
            >
                  <JobCardInfo />
            </div>
        </>
    )
} export default View;