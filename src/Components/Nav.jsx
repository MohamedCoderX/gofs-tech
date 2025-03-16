"use client"
import React, { useState } from 'react'
import '../../src/app/globals.css'
import { Button } from './ui/button'
import { HamIcon } from 'lucide-react'


const Nav = () => {
  const [nav,setnav] = useState(false)
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 w-full z-10">
      
      {/* Logo Section */}
      <div className='z-10'>
        <img src='/Assets/gofs.png' alt="logo" className="w-[200px] sm:w-[250px] md:w-[250px]" />
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-black text-lg z-10 font-semibold">
        <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Services</li>
        <li className="cursor-pointer hover:text-gray-300 transition">About us</li>
        <li>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 transition">
            Contact Us
          </Button>
        </li>
      </ul>

      {/* Mobile Menu (Optional) */}
      <div className="md:hidden" onClick={()=>setnav(!nav)}>
        <HamIcon/>
       {
        nav? <ul className="md:block items-center gap-8 text-black text-lg font-semibold absolute bg-white left-0 w-full top-20 z-20 py-7">
        <li className="cursor-pointer hover:text-gray-300 transition mb-2">Home</li>
        <li className="cursor-pointer hover:text-gray-300 transition mb-2">Services</li>
        <li className="cursor-pointer hover:text-gray-300 transition mb-2">About us</li>
        <li>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 transition">
            Contact Us
          </Button>
        </li>
      </ul>:""
       }
      </div>

    </nav>
  )
}

export default Nav;
