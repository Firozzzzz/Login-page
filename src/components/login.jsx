import React from "react"
import './login.css'
import './background.jsx'



function Login() {
    return(
        <div className="mainbox">
        <div className="container">
            <input className="bar1" placeholder="Email"/>
            <input className="bar2" placeholder="Password"/>
            <div className="box1" >
             <p className="or">or <a href="">create new account</a></p>
             
            </div>
            <button className="logbtn">Login</button>
        </div>
        </div>
  
    );
}


export default Login