import { useEffect, useState } from 'react'
import Box from './components/Box'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () =>{
    setconvertedAmount(amount*currencyInfo[to])
  }
  
  const swap = () =>{
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='w-full h-full'>
      <div className='w-[50%] mt-[10%] m-auto py-6 border border-gray-60 rounded-lg  backdrop-blur-sm bg-white/30'>
          <form action="" onSubmit={(e)=>{e.preventDefault(); convert()}}>
            <div>
              <Box
                label={"from"}
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount)=>{setAmount(amount)}}
                onCurrencyChange={(currency)=>{setFrom(currency)}}
                selectCurrency={from}
              />
            </div>
            <div className='relative w-full h-2'>
              <button onClick={swap} className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700'>Swap</button>
            </div>
            <div>
              <Box
                label={"to"}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>{setTo(currency)}}
                selectCurrency={to}
                inputDisabled={true}
              />
            </div>
            <div className='w-full p-5 '>
              <button className=' w-full bg-blue-600 p-4 rounded-lg text-xl text-white hover:bg-blue-700'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default App
