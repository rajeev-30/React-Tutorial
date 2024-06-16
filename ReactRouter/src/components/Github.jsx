import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <div className='flex justify-center py-10'>
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/rajeev-30')
    return res.json()
}