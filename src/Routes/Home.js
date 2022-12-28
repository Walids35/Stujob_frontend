import Nav from "../Components/MyNavbar"
import ProfileCards from "../Components/ProfileCards"
import JobsPicked from "../Components/JobsPicked"
import NewJobs from "../Components/NewJobs"

function Home ({ user }){
    return(
        <div style={{paddingBottom:"80px"}} className="Home">
            <Nav user= { user }/>
            <ProfileCards user = { user }/>
            <JobsPicked/>
            <NewJobs />
        </div>
    )
} export default Home;