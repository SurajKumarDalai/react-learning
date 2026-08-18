import {useState} from "react";

function TemperatureConverter(){

    const[temp, setTemp] = useState("");
    const[unit, setUnit] = useState("Celsius");

    const[result, setResult]= useState("");

    function HandleConvert(){

        let calculateTemp= "";

        if(unit === "Celsius"){
            calculateTemp = (temp * 9/5) + 32;
        }
        else{
            calculateTemp= (temp - 32) * 5/9;
        }
        setResult(calculateTemp);  
    }

    return(

        <>
        <h2> Temperature:
        <input 
        type="number" 
        value={temp}
        onChange={(event)=> setTemp(event.target.value)}
        placeholder="Enter the temperature"
        />
        </h2>

        <h2>Unit:
            <select name="" id=""
            value={unit}
            onChange={(event)=> setUnit(event.target.value)}
            >
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
            </select>
        </h2>

        <button onClick={HandleConvert}>
            Convert
        </button>

        <h2>Result: {result}</h2>

        </>
    )
}
export default TemperatureConverter;