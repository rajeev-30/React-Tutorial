import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")
  
  return (
   
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-10'>
          <div className='flex flex-wrap justify-center bg-white p-2 rounded-3xl gap-4 px-4'>
            <button className='px-4 py-2 rounded-full text-white' style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button className='px-4 py-2 rounded-full ' style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>
            <button className='px-4 py-2 rounded-full text-white' style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
            <button className='px-4 py-2 rounded-full text-white' style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
            <button className='px-4 py-2 rounded-full text-white' style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>Black</button>
            <button className='px-4 py-2 rounded-full ' style={{backgroundColor:"white"}} onClick={()=> setColor("white")}>White</button>
            <button className='px-4 py-2 rounded-full ' style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>Olive</button>
          </div>
      </div>
    </div>
  )
}

export default App
