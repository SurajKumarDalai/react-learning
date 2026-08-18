import { useState } from "react";

function WordCounter(){

    const[message, setMessage]= useState("")

    return(

        <>
        
        <h2>Message:
        <input 
        type="text" 
        value={message}
        onChange={(event)=> setMessage(event.target.value)}
        placeholder="Enter your Message"
        />
        </h2>

        <p>Character Count: {message.length}</p>
        <p>
        Word Count: {message === "" ? "0" : message.split(" ").length }
        </p>

        </>

    )
} 
export default WordCounter;