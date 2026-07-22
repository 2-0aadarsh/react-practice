import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';

const Todo = () => {

  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
    setInput(event.target.value);
  }

  const handleSubmit = () => {
    if(input.trim() === "") return;

    setTodo([...todo, input.trim()]);
    setInput("");
  }

  return (
    <div className='w-full h-full bg-slate-800 text-white p-8 flex flex-col items-start gap-4'>
            
      <div className="w-1/2 h-full border flex flex-col justify-end gap-5">
        {todo.length ? 
          (<ul>
            {todo.map((item, index) => (<li  key={index}> {item} </li>))}
          </ul>) : 
          
          "No Todo"}
      </div>
      
      <div className="w-1/2 h-full flex flex-col justify-end gap-5">
        
        <input
         value={input}
         onChange={handleChange} 
         type="text" 
         className='px-2 py-1 h-14 outline-none border text-sm' 
        
        />
        
        <button
          onClick={handleSubmit}
          className='bg-green-500 px-2 py-1 rounded-sm text-sm cursor-pointer'
        >
          submit
        </button>
      
      </div>   
    
    </div>
  )
}

export default Todo