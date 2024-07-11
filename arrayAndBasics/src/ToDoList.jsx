import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList()
{

    const [todos,setTodos] = useState([{task:"sample task" , id:uuidv4()}]);

    let [newTodo , setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos([...todos,{task:newTodo , id:uuidv4()}]);
        setNewTodo("");
    }

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodo} />
            <br /><button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br /><hr /><br />
            <h3>ToDo-List</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}