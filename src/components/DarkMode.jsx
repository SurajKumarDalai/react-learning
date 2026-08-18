import {useState} from "react";

function DarkMode(){

    const[dark, setDark]= useState(false);

    return(
        <div 
        style={{
            backgroundColor: dark ? "black":"white",
            color: dark? "white" :"black"
        }}>

        <h2>{dark ? "Dark mode" : "Light Mode" }</h2>

        <button onClick = {()=> setDark(prev => !prev)}>
            {dark ? "Switch to Light" : "Switch to Dark"}
        </button>

        </div>
    )
}
export default DarkMode;