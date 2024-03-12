import React from "react"
import './login.css'
import './background.css'



function Login() {
    return(
        
        <div className="container">
            <input className="bar1" placeholder="Email"/>
            <input className="bar2" placeholder="Password"/>
            <br />
            <button className="sninbtn">Sign in</button>
            <p className="text1"><h5>Forgot your password ?</h5></p>

            
            <div className="box1">
                <p className="text2"><h5>Don't have an account ?</h5></p>
                <button className="snupbtn">Sign up</button>
            </div>
        </div>
       
  
    );
}


export default Login