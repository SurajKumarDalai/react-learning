import { useState } from "react";

function FeedbackForm(){

    const[name, setName] = useState("");
    const[email, setEmail]= useState("");
    const[feedback, setFeedback] = useState("")

    const[submitted, setSubmitted]= useState(false)
    const [error, setError] = useState("")

    function handleSubmit(event){
        event.preventDefault();

        if(name ===""){
            setError("Name is required");
        }
        else if (email === "") {
            setError("Email is required");
         }
        else if (feedback === "") {
            setError("Feedback is required")
         }
         else{
            setError("")
            setSubmitted(true)
         }
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

            <textarea name="feedback" id="" cols="30" rows="10" 
            value={feedback}
            onChange ={(event)=> setFeedback(event.target.value)}>
            </textarea>


            <button type="submit">
            Submit Feedback 
            </button>

            {submitted && (
                    <p>Thank you, {name}❤️
                    Your feedback has been submitted.
                    </p>
            )}

            {error !== "" &&(
                <p>{error}</p>
            )}
        </form>
        </>
    )
}
export default FeedbackForm;