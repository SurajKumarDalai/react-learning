import {useState} from "react";

function TipCalculator(){

    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("");

    const[tipAmount, setTipAmount] = useState("");
    const[total, setTotal] = useState("");

    function handleCalculate(){

        const tipAmount = bill * tip/100;
        const total = bill + tipAmount;

        setTipAmount(tipAmount);
        setTotal(total);
    }

    return(

        <>
        
        <h2>
        Bill Amount:
        <input 
        type="number" 
        value={bill}
        onChange={(event)=> setBill(Number(event.target.value))}
        placeholder="Enter the Bill Amount"
        />
        </h2>

        <h2>
        Tip Percentage:
        <input 
        type="number" 
        value={tip}
        onChange={(event)=> setTip(Number(event.target.value))}
        placeholder="Enter the Tip Percentage"
        />
        </h2>

        <button  onClick={handleCalculate}>
        Calculate Tip
        </button>

        {total !== "" && (
            <>
            <p>Tip Amount: {tipAmount}</p>
            <p>Total Amount: {total}</p>
            </>
        )}

        </>
    )
}
export default TipCalculator;