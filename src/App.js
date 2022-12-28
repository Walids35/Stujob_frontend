import Authentification from './Routes/Authentification';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styling/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Routes/SignIn"
import Home from "./Routes/Home"
import Jobs from "./Routes/Jobs"
import Profile from "./Routes/Profile"
import MyApplications from './Routes/MyApplications';
import Saved from './Routes/Saved';
import View from "./Routes/View"
import { user } from "./Data/user"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentification />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home user={ user }/>} />
          <Route path="/jobs" element={<Jobs user={ user }/>}/>
          <Route path="/profile" element={< Profile user= { user }/>} />
          <Route path="/myapplications" element={< MyApplications user={ user }/>} />
          <Route path="/saved" element={< Saved user={ user }/>} />
          <Route path="/view" element={< View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
