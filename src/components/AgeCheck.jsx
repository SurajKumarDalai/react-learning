import {useState} from "react";

function AgeCheck(){

    const[age, setAge]= useState("")

    return(

        <>Age :
        <input 
        type="number"
        value={age}
        onChange={(event)=> setAge(event.target.value)}
        />

        <h2>
            {age<18? "minor":
            age < 60? "adult" : "Senior Citizen"}
        </h2>
        </>
    )
}
export default AgeCheck;