import { useState } from "react";

function ThemeToggle(){

    const [darkMode, setDarkMode] = useState(false);

    return(
        <>
        <h2>{darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}</h2>

        <button onClick ={()=> setDarkMode(prev => !prev)}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
        </>
    );
}
export default ThemeToggle;