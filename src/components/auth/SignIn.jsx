import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {auth} from "../../firebase";
import "./SignIn.css"

function SignIn(){
    let warning=null;
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")




    function submitForm(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
            warning=0;
        })
    }

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form onSubmit={submitForm}>
                <input type='email' placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type="submit" >Sign In</button>
            </form>
            <p>Please Sign up if you haven't already!</p>

        </div>
    )
}

export default SignIn;