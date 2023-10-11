import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [Mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({msg: message , typ : type})
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const switchColor = ()=>{
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setMode(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    setTimeout(() => {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }, 4000);
    setTimeout(() => {
      showAlert("Light mode will be enabled in two seconds","warning")
    }, 2000);
  }
  const toggleMode = ()=>{
    if(Mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white' 
      showAlert("Dark mode enabled","success")
      document.title="TextUtils-Dark mode"
    }
    if(Mode === "dark"){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("light mode enabled","success")
      document.title="TextUtils-Light mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar head="Textutils" about="About" mode={Mode} toggleMode = {toggleMode} swchCol={switchColor} /> 
        <Alert Alrt={alert}  /> 
        {/* acts as parameter to a funtion so that heading home and other things can be edited if specified in the Navbar.js file  Change the textutils inside the head and it will be changed in the component also*/}
        <Routes>
          <Route path="/" element={ <div className="container my-5 ">
              <TextForm showAlert={showAlert} head="Enter your text here.." mode={Mode} />
            </div>} />
          <Route path="/About" element={ <div className="container my-5 ">
            <About/>
          </div>} />
        </Routes>
        
           
         
      </Router>
    </>
  );
}

export default App;
