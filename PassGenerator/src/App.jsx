import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("lpu");
  const passRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%&*()-_=+[]{}|<>?";
    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length+1));
      pass+=char;
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed])

  const copyToClipboard = () =>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    generatePassword();
  },[length,charAllowed,numberAllowed])
  
  return (
    <>
      <div className='bg-[#183351] w-[50%] mx-auto my-10 rounded-xl'>
        <div className='py-8 text-center text-4xl font-bold'>
          <p>Password Generator</p>
        </div>
        <div className='bg-white rounded-lg overflow-hidden m-4'>
          <div className='flex w-full justify-between'>
            <input type="text" value = {password} ref={passRef} readOnly placeholder='Password' className='w-full bg-white text-xl text-orange-400 outline-none p-3 '/>
            <button onClick={copyToClipboard} className='text-white text-lg bg-blue-500 py-3 overflow-hidden px-6 hover:bg-blue-600'>Copy</button>
          </div>
        </div>
        <div className='flex gap-4 text-xl mx-4 py-4'>
          <div className='flex gap-2'>
            <input type="range" value={length} min={6} max={100} onChange={(e)=> {setLength(e.target.value)} } className='cursor-pointer'/>
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" className='cursor-pointer' onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label>Numbers</label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" className='cursor-pointer' onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
