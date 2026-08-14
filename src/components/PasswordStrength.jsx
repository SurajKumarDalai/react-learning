import { useState } from "react";

function PasswordStrength(){

    const[password, setPassword] = useState("")

    return(

        <>

        <input 
        type="password"
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        placeholder="Event your password"
        />

        <h2>
        Password Strength:{""}
        {password.length<5? "Weak":
        password.length<= 8?"Medium":"Strong"}
        </h2>

        </>
    )
}
export default PasswordStrength;