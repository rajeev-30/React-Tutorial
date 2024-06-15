import React, { useState } from 'react'

function Box({
    amount = 0,
    onAmountChange,
    label,
    currencyOptions = [],
    selectCurrency = "usd",
    onCurrencyChange,
    inputDisabled = (false)
}) {
    
  return (
    <>
        <div className='w-[94%] m-auto h-36 bg-white  rounded-lg'>
            <div className='flex justify-between p-4 text-xl '>
                <div className=''>
                    <p className='text-gray-400'> {label}</p>
                    <input type="number" className='outline-none mt-12' readOnly={inputDisabled} value={amount} onChange={(e)=>{onAmountChange(e.target.value)}}/>
                </div>
                <div>
                    <p className='text-gray-400'>CurrencyType</p>
                    <select name="" id="" value={selectCurrency} onChange={(e)=>{onCurrencyChange(e.target.value)}} className='mt-12 px-3 bg-gray-200 rounded-lg py-1'>
                        {currencyOptions.map((currency) => (
                                <option key={currency} value={currency}>
                                {currency}
                                </option>
                                
                            ))}
                          
                    </select>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Box