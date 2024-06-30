import React, { useEffect, useRef, useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function TodoItem({todo}) {
    const {toggleComplete, deleteToDo, updateToDo} = useToDo();
    const [isEditable, setIsEditable] = useState(false);
    const [editMsg, setEditMsg] = useState(todo.todo);
    const inputRef = useRef(null)

    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }
    const deleteToDoHandler = ()=>{
        deleteToDo(todo.id)
    }
    const isEditableHandler = () =>{
        inputRef.current.focus()
        setIsEditable((prev)=>!prev)
        updateToDo(todo.id, editMsg)
    }

    //local Storage
    
  return (
    <div className=' w-full'>
        <div className={`flex justify-between w-[50%] mx-auto rounded-lg ${todo.completed?"bg-green-200":"bg-[#ccbed7]"}`}>

            <div className='flex gap-5 py-auto p-4 w-full'>
                <input type="checkbox" 
                    className='cursor-pointer'
                    checked={todo.completed} 
                    onChange={toggleCompleted}
                />

                <input type='text' 
                    ref={inputRef}
                    className={`text-black ${todo.completed? "line-through":""} ${isEditable ? "border-black/10 px-2" : "border-transparent"} border outline-none w-full bg-transparent rounded-lg`}
                    readOnly={!isEditable}
                    onChange={(e)=>setEditMsg(e.target.value)}
                    value={editMsg}
                />
            </div>
            <div className='flex gap-5 px-4 py-2'>
                <button className='bg-white py-2 px-3 rounded-lg' onClick={isEditableHandler} disabled={todo.completed}>{isEditable?"📁":"✏️"}</button>
                <button onClick={deleteToDoHandler} className='bg-white py-2 px-3 rounded-lg'>❌</button>
            </div>
        </div>
        {/* {console.log(todos)} */}
    </div>
  )
}

export default TodoItem