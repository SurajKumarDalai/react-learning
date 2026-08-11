import {useState} from "react";

function AgeChecker(){

    const[age, setAge]= useState("");
    const[submittedAge, setSubmittedAge]= useState("");

    function handleSubmit(event){
        event.preventDefault();
        setSubmittedAge(age);
    }

    return(

        <>
        <form onSubmit={handleSubmit}>

        <input
        type="text"
        value={age}
        onChange={(event)=> setAge(event.target.value)}
        placeholder="Enter your age" 
        />

        <button type="submit">
            Submit
        </button>
        </form>

        <h2>Submitted Age : {submittedAge}</h2>
        {submittedAge !== "" && (
            <p>{submittedAge >= 18 ?
                "Eligible to Vote" : 
                "Not Eligible to Vote"}
                </p>
        )}
        
        </>

    );

}
export default AgeChecker;