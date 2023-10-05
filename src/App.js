import "tailwindcss/tailwind.css"

import './output.css';
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';
import Home from "./components/routes/Home";
import Contact from "./components/Contact";
import Login from "./components/routes/Login";
import Signup from "./components/routes/Signup";
import LoggedInHome from "./components/routes/LoggedInHome";

import { useCookies } from "react-cookie";
import Hello from "./components/Hello";
import UploadSong from "./components/routes/UploadSong";


function App() {
  const [cookie,setCookie] = useCookies(["token"]);
  console.log(cookie.token);
  return (
    <div className="w-screen h-screen font-poppins">
      <Router>
        {cookie.token ? (
          <Routes>
            {/* //loggedin routes ........ */}
                <Route exact path="/" element={<Hello />} />
        
               

                <Route path="/home" element={<LoggedInHome />} />

                <Route path='/uploadsong' element={<UploadSong />} />

                <Route path="*" element={<Navigate to="/home" />} />
                
          </Routes>
        ) : (
          <Routes>
                 <Route exact path="/home" element={<Home />} />
                 <Route exact path="/contact" element={<Contact />} />
                 <Route exact path="/login" element={<Login />} />
                 <Route exact path="/signup" element={<Signup />} />
                 <Route path="*" element={<Navigate to="/login" />} />
     
         </Routes>
        )
       
      }
      </Router>
    
    </div>
  );
}

export default App;
