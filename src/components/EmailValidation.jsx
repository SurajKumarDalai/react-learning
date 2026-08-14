import { useState } from "react";

function EmailValidation(){

    const[email, setEmail]= useState("")

    return(

        <>
        
        <input 
        type="email" 
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
        placeholder="Enter your email"
        />

        <h2>
            {email !== "" && (email.includes("@")? "Valid Email ✅": "Invalid Email ❌")}
        </h2>
        </>
    )
}
export default EmailValidation;