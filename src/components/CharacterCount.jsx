import {useState} from "react";

function CharacterCount(){character

    const[character, setCharacter]= useState("");

    return (

        <>

        <input 
        type="text"
        value={character}
        onChange={(event)=> setCharacter(event.target.value)}
        placeholder= "Enter the message"
        />

        <h2>character typed : {character.length}</h2>

        { character.length >= 100 && (
            <p>Character limit exceeded</p>
        )}

        </>
    );
}
export default CharacterCount;