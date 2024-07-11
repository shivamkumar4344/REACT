import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList()
{

    const [todos,setTodos] = useState([{task:"sample task" , id:uuidv4()}]);

    let [newTodo , setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos((prevTodos) =>
        {
            return [...prevTodos,{task:newTodo , id:uuidv4()}];
        });
        setNewTodo("");
    }

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodos = (id) =>{
        setTodos((prevTodo) =>todos.filter((prevTodo)=>prevTodo.id != id));

    }

    let upperCaseAll = () =>{
        setTodos((prevTodo)=>prevTodo.map((todo)=>{
            return {...todo,task: todo.task.toUpperCase()};
        }
    ))
    };

    let upperCaseOne = (id) =>{
        setTodos((prevTodo)=>prevTodo.map((todo)=>
            {
            if(todo.id == id)
            {
            return {...todo,task: todo.task.toUpperCase(),};
            }
            else{
                return todo;
            }
        }
    ))
    };

    return(
        <div>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodo} style={{border:"2px solid black",borderRadius:"4px", height:"35px",width:"180px",backgroundColor:"white",color:"red" ,fontSize:"17px"}}/>
           <button onClick={addNewTask} style={{marginLeft:"15px"}}>Add Task</button>
            <br /><br /><br /><br /><hr /><br />
            <h2>ToDo-List</h2>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={{fontFamily:"sans-serif",fontSize:"18px"}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button style={{marginTop:"20px",marginLeft:"12px"}} onClick={()=>deleteTodos(todo.id)}>Delete</button>
                        <button style={{marginTop:"20px",marginLeft:"12px"}} onClick={()=>upperCaseOne(todo.id)}>UpperCaseOne</button>

                        </li>
                ))}
            </ul>
                <br /><br /><hr /><br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}