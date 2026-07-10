import {useState} from "react";

function NameInput(){

    const[name, setName] = useState("");

    return(
        <>
        
        <input
        onChange ={(event)=> setName(event.target.value)} 
        />

        <h1>Hello {name}</h1>
        </>
    );
}
export default NameInput;