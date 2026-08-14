import { useState } from "react";

function ConfirmPass(){

    const[password, setPassword]= useState("")
    const[confirmPassword, setConfirmPassword]= useState("")
    
    return(

        <>
        <input 
        type="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        placeholder="Enter your Password"
        />

        <input 
        type="password" 
        value={confirmPassword}
        onChange={(event)=> setConfirmPassword(event.target.value)}
        placeholder="Confirm your Password"
        />

        {confirmPassword !== "" && 
        (password === confirmPassword ? 
        "Password Match ✅": "Passwords do not match ❌")}

        </>
    )
}
export default ConfirmPass;