import React from 'react'

function Footer() {
  return (
    <div>
        <div className='border-b-2 border-gray-200'></div>
        <div className='w-[70%] mx-auto p-4 text-gray-600'> 
            <div className='w-full flex justify-between'>
                <div className='font-semibold'><img className="mr-3 h-12" src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" /></div>
                <div className='flex justify-between gap-8'>
                    <div className='grid gap-4'>
                        <h3 className='font-semibold text-black'>Resources</h3>
                        <p>Home</p>
                        <p>about</p>
                    </div>
                    <div className='grid gap-4'>
                        <h3 className='font-semibold text-black'>Resources</h3>
                        <p>Github</p>
                        <p>Insta</p>
                    </div>
                    <div className='grid gap-4'>
                        <h3 className='font-semibold text-black'>Resources</h3>
                        <p>Privacy Policy</p>
                        <p>Terms & Condition</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-b-2 border-gray-200 pb-2'></div>
    </div>
  )
}

export default Footer