import {useState} from "react";

function PasswordValaidation(){

    const[password, setPassword]= useState("");

    return(

        <>
        <h2>Signup Form</h2>

        <input 
        type="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        placeholder="Enter your password"
        />

        {password.length <8 &&(
            <p>Password must be atleat 8 characters.</p>
        )}
        </>
    );
}
export default PasswordValaidation;