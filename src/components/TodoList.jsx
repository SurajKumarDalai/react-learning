import {useState} from "react";

function TodoList(){

    const[task, setTask]= useState("");
    const[tasks, setTasks]= useState([]);

    function handleAdd(){
        if(task===""){
            return
        }
        setTasks([...tasks,task])
        setTask("")
    }

    function handleDelete(index){
        const newArray = tasks.filter((task, i)=> i !== index)
        setTasks(newArray)
    }

    return(

        <>
        
        <input 
        type="text" 
        value={task}
        onChange={(event)=> setTask(event.target.value)}
        placeholder="Enter your Task"
        />

        <button onClick={handleAdd}>
            Add
        </button>

        <h2>Tasks:</h2>
        {tasks.map((task, index)=>(
            <p key={index}>
                {task}

        <button onClick={()=>handleDelete(index)}>
            Delete
        </button>
            </p>

        ))}

        </>
    )
}
export default TodoList;