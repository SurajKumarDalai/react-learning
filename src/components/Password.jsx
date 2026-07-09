import {useState} from "react";

function Password(){

    const[showPassword, setShowPassword] = useState(false);

    return(

        <>
        <h2>{showPassword ? "myPassword123" : "*************"}</h2>
        <button onClick={()=>setShowPassword(prev => !prev)}>
            {showPassword ? "Hide":"Show"}
        </button>
        </>
    );
}
export default Password;