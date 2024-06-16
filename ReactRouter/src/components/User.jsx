import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='p-4 bg-gray-200 text-center font-semibold text-2xl'>User: {userid}</div>
  )
}

export default User