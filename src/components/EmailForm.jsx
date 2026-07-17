import {useState} from "react";

function EmailForm(){

    const[email, setEmail] = useState("");
    const[submittedEmail, setSubmittedEmail] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        setSubmittedEmail(email);
    }

    return(

        <>
        <form onSubmit={handleSubmit}>
            

            <input 
            type="text"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            placeholder="Enter your email"
            />

            <button type="submit">
                Submit
            </button>
            

        </form>

        <h2>Submitted Email :{submittedEmail}</h2>
        </>
    );
}
export default EmailForm;