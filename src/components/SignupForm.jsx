import {useState} from "react";

function SignupForm(){

    const[name, setName] = useState("");
    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("")
    
    const[submittedName, setSubmittedName] = useState("");
    const[submittedEmail, setSubmittedEmail] = useState("");
    const[submittedPassword, setSubmittedPassword] = useState("");


    function handleSubmit(event){
        event.preventDefault();

        setSubmittedName(name);
        setSubmittedEmail(email);
        setSubmittedPassword(password);
    }


    return(

        <>
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            value={name}
            onChange={(event)=>setName(event.target.value)}
            placeholder= "Enter your name"
            />

            <input
            type="email"
            value={email}
            onChange ={(event)=> setEmail(event.target.value)}
            placeholder="Enter your email"
            />

            <input
            type="password"
            value={password}
            onChange ={(event)=> setPassword(event.target.value)}
            placeholder="Enter your password"
            />

            <button type="submit">
                Submit
            </button>
        </form>
        
        <>
        <h2>Submitted Details :</h2>
        <p>Name : {submittedName}</p>
        <p>Email : {submittedEmail}</p>
        <p>Password : {submittedPassword}</p>
        </>
        </>
    );
}
export default SignupForm;