import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full'>
        
        <div className='w-[70%] h-20 mx-auto flex items-center justify-between font-semibold text-m'>
            <Link to="/" className="flex items-center">
                <img
                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="mr-3 h-12"
                    alt="Logo"
                />
            </Link>
            <div className='flex gap-6 cursor-pointer'>
                <NavLink to={"/"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-700"}`}>
                    Home
                </NavLink>
                <NavLink to={"about"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-700"}`}>
                    About
                </NavLink>
                <NavLink to={"contact"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-700"}`}>
                    Contact
                </NavLink>
                <NavLink to={"github"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-700"}`}>
                    Github
                </NavLink>
                <NavLink to={"user/1"} className={({isActive})=>`${isActive?"text-orange-700":"text-gray-700"}`}>
                    User
                </NavLink>
            </div>
            <div className='flex gap-6'>
                <Link to={"/"}>
                    <div className='text-center p-2 cursor-pointer'>Login</div>
                </Link>
                <Link to={"/"}>
                    <button className='bg-red-600 text-white p-2 rounded-lg'>Get Started</button>
                </Link>

            </div>
        </div>
        <div className='border-b-2 border-gray-200'></div>
    </div>
  )
}

export default Navbar