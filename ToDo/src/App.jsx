import { useEffect, useState } from 'react'
import ToDoForm from './components/ToDoForm'
import { ToDoProvider } from './contexts/ToDoContext'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo)=>{
    if(!todo) return
    setTodos((prev)=>[{id:Date.now(), todo, completed:false}, ...prev]);
  }

  const toggleComplete = (id) =>{
    setTodos((todos)=>todos.map((todo)=>todo.id===id?{...todo, completed:!todo.completed}: {...todo}))
  }

  const deleteToDo = (id) => {
    setTodos((todos)=>todos.filter((todo)=>todo.id!==id))
  }

  const updateToDo = (id, msg) =>{
    setTodos((todos)=>todos.map((todo)=>todo.id===id?{...todo, todo:msg}:{...todo}))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) 
    {console.log(todos)}
    if(todos.length>0) setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  return (
    <ToDoProvider value={{todos,addToDo,updateToDo,deleteToDo,toggleComplete}}>
      <div className="bg-[#172842] w-full min-h-screen text-white text-center">
        <h1 className='text-4xl font-bold p-16'>Manage Tour Todos</h1>
        <ToDoForm/>
        <div className='pb-6'></div>
        {
          todos.map((todo)=>
            <div key={todo.id} className='w-full py-3'>
              <TodoItem todo={todo}/>
            </div>
          )
        }
        
      </div>
    </ToDoProvider>
  )
}

export default App
