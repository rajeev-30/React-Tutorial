import React from 'react'

function Home() {
  return (
    <div className='w-full  '>
        <div className='mt-20 w-[70%] mx-auto flex justify-between'>
            <img width={400} src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG5nfGVufDB8fDB8fHww" alt="" />
            <div className='text-end'>
                <div className='font-bold text-5xl mb-2'>Download Now</div>
                <div className='font-bold text-4xl mb-4'>Lorem Ipsum</div>
                <button className='bg-red-600 text-white p-2 rounded-lg'>Get Started</button>
            </div>
        </div>
        <div className=' w-full flex justify-center mt-10 mb-20 '>
            <img width={400} className='text-end' src="https://plus.unsplash.com/premium_photo-1661876402729-09f3b7e87640?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG5nfGVufDB8fDB8fHww" alt="" />
        </div>
        {/* <div className='border-b-2 border-gray-200'> </div> */}
    </div>
  )
}

export default Home