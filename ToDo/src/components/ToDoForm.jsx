import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext';
function ToDoForm() {
    const [todoMsg, setTodoMsg] = useState("");
    const {addToDo} = useToDo();
    const add = (e)=>{
        e.preventDefault();
        addToDo(todoMsg);
        setTodoMsg("")
    }
  return (
    <form onSubmit={add} className='w-full'>
      
          <input 
          className='w-[45%] py-3 text-lg bg-white/20 px-4 text-white outline-none rounded-l-lg'
          type="text"
          value={todoMsg}
          onChange={(e)=>setTodoMsg(e.target.value)}
          placeholder="Add a todo..."
          />
          <button type="submit" className='w-[5%] bg-blue-500 py-3 text-lg rounded-r-lg  px-4'>Add</button>
    </form>
  )
}

export default ToDoForm