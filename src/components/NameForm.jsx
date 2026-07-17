import {useState} from "react";

function NameForm(){

    const[name, setName] = useState("");
    const[submittedName,setSubmittedName] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        setSubmittedName(name);
    }
    
    return(

        <>
        <form onSubmit={handleSubmit}>

        <input
        type="text"
        value={name}
        onChange={(event)=>setName(event.target.value)}
        placeholder="Enter your name"
        />

        <button type="submit">
            Submit
        </button>

        </form>

        <h2>Submitted Name: {submittedName}</h2>
        </>
        
    );

}
export default NameForm;