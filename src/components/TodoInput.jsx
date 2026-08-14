import {useState} from "react";

function TodoInput(){

    const[task, setTask]= useState("");
    const[tasks, setTasks]= useState([]);

    function HandleAdd(){
        if(task===""){
            return
        }
        setTasks([...tasks,task])
        setTask("")
    }

    return(

        <>
        <input 
        type="text" 
        value={task}
        onChange={(event)=> setTask(event.target.value)}
        placeholder="Enter your Task"
        />

        <button onClick={HandleAdd}>
            Add
        </button>

        <h2>Tasks:</h2>
        {tasks.map((task, index)=>(
            <p key={index}>
                {task}
            </p>
        ))}
        </>
    )
}
export default TodoInput;