import { useState } from "react";

function LoginValidation(){

    const[email, setEmail]=useState("")
    const[password, setPassword]= useState("")

    return(

        <>
        
        <input 
        type="email"
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
        placeholder="Enter your Email"
        />

        <input 
        type="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        placeholder="Enter your Password"
        />

        {email === "" ?
        "Email is required" : 
        password === "" ? 
        "Password is required" :
        password.length < 8 ? 
        "Password must be at least 8 characters":"Login details are valid ✅"}
        </>
    )
}
export default LoginValidation;