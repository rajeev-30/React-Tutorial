import './App.css'
import { useState } from 'react';
import Card from './Card';

function App() {
  let [counter, setCounter] = useState(0);
  const increase = () =>{
    setCounter(counter+1)
    if(counter>=10){
      setCounter(10)
    }
  }
  const decrease = () =>{
    setCounter(counter-1)
    if(counter<=0){
      setCounter(0)
    }
  }
  return (
    <>
      <h1>Welcome to Vite</h1>
      <h2>Counter value: {counter}</h2>
      <button className='px-2' onClick={increase}>Add value</button>
      <button onClick={decrease}>remove value</button>
      <Card user="Rajeev"/>
      <Card user="RK"/>
    </>
  )
}

export default App
