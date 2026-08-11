import {useState} from "react";

function ConfirmPassword(){

    const[password, setPassword]= useState("");
    const[confirmPassword, setConfirmPassword]= useState("")

    const[submittedPassword, setSubmittedPassword]= useState("")
    const[submittedConfirmPass, setSubmittedConfirmPass]= useState("")

    function handleSubmit(event){
        event.preventDefault();

        setSubmittedPassword(password);
        setSubmittedConfirmPass(confirmPassword);
    }

    return(

        <>
        <form onSubmit={handleSubmit}>

            <input 
            type="password" 
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            placeholder= "Enter your Password"
            />

            <input 
            type="password" 
            value={confirmPassword}
            onChange={(event)=> setConfirmPassword(event.target.value)}
            placeholder= "Confirm your Password"
            />

            <button type="submit">
                submit
            </button>

            {submittedPassword !== "" && 
            (submittedPassword === submittedConfirmPass ? 
            "Password match ✅" : "Password do not match" )}

        </form>
        </>
    );
}
export default ConfirmPassword;