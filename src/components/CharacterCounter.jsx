import {useState} from "react";

function CharacterCounter(){

    const [counter, setCounter] = useState("");

    return (

        <>
        <input 
        type="text"
        value={counter}
        onChange={(event)=>setCounter(event.target.value)}
        placeholder= "Enter your feedback"
        />

        <h2>Character Remaining : {Math.max(0,50-counter.length)}</h2>

        {counter.length > 50 && (
            <p>Limit Exceeded ❌</p>
        )}
        </>
    )
}
export default CharacterCounter;