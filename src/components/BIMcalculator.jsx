import { useState } from "react";

function BMIcalculator(){

    const[height, setHeight]= useState("");
    const[weight, setWeight]= useState("");

    const[bmi, setBmi]= useState("");

    function HandleBMI(){
          const heightInMeters= height/100;
          const calculateBmi = weight / (heightInMeters * heightInMeters)
          setBmi(calculateBmi);
    }
    

    return(

        <>
        <input 
        type="number" 
        value={height}
        onChange={(event)=> setHeight(event.target.value)}
        placeholder="Enter your Height"
        />

        <input 
        type="number" 
        value={weight}
        onChange={(event)=> setWeight(event.target.value)}
        placeholder="Enter your Weight"
        />

        <button onClick={HandleBMI}>
            Calculate BMI
        </button>

        <h2>
            BMI : {bmi}
        </h2>

        {bmi !== "" &&(
                bmi < 18.5? "underweight":
                bmi <25? "normal" : 
                bmi < 30 ? "overweight" : "obese"
            )}

        </>
    )
}
export default BMIcalculator;