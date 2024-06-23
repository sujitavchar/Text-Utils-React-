import "./App.css";
import Navbar from "./components/navbar";
/*import About from "./components/about";*/
import Textform from "./components/textform";
import React, { useState } from "react";
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/

function App() {
  const [mode, setmode] = useState("light");
  const handleToggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  //imp note  --  Router doesnt work with  gh pages so comenting it but it will work on other platforms
  return (
   /* <>
      <Router> 
        <Navbar
          title="Text-Utils(React)"
          abouttext="About"
          mode={mode}
          toggleMode={handleToggle}
        />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textform  mode={mode}/>} />
            <Route exact path="/about" element={<About />} />   
          </Routes>
        </div>
      </Router>
    </>
    */

    <>
      <Navbar
          title="Text-Utils(React)"
          abouttext="About"
          mode={mode}
          toggleMode={handleToggle}
        />
        <div className="container">
        <Textform  mode={mode}/>
        </div>
    </>
  );
}

export default App;
//exact keyword matches the exact paths of components . If we dont use exact js does partial matching which can be problematic