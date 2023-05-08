import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import {auth} from "../../firebase";

function SignUp(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")


    function submitForm(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="signin-container">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
                <input type='email' placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default SignUp;