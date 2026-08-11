import { useState } from "react";

function LoginForm(){

    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");

    const[submittedEmail, setSubmittedEmail]= useState("");
    const[submittedPassword, setSubmittedPassword]= useState("");

    function handleSubmit(event){
        event.preventDefault();

        setSubmittedEmail(email);
        setSubmittedPassword(password);
    }

    return(

        <>
        <form onSubmit={handleSubmit}>

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

            <button type="submit">
                Login
            </button>

        </form>

        {submittedEmail === "" && (
            <p>Email is required</p>
        )}

        {submittedPassword !== "" && submittedPassword.length <= 8 && (
                <p>Password must be at least 8 characters</p>
        )}
        </>
    );
}
export default LoginForm;