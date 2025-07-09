'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose, CgMenuCheese } from 'react-icons/cg'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => setIsActive(!isActive)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black
      }`}
    >
      <div className="flex justify-center items-center py-4">
        <div className="flex justify-between items-center w-[90%] max-w-7xl mx-auto text-white">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={87} height={57} />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8 font-semibold tracking-wide">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-gray-300 transition">Work</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-300 transition">Careers</Link>
            </li>
            
          </ul>

          <ul className='hidden md:block'>
          <li>
              <Link href="/contact">
                <span className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                  Contact us
                </span>
              </Link>
            </li>
          </ul>

          {/* Mobile Icon */}
          <button className="md:hidden text-2xl" onClick={handleClick}>
           <CgMenuCheese />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isActive && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 text-white z-40">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <Link href="/" onClick={handleClick}>
              <Image src="/logo.png" alt="logo" width={87} height={57} />
            </Link>
            <button onClick={handleClick} className="text-2xl">
              <CgClose />
            </button>
          </div>
          <div className="flex flex-col space-y-6 p-8 text-lg font-medium">
            <Link href="/" onClick={handleClick} className="hover:text-gray-400">Home</Link>
            <Link href="/work" onClick={handleClick} className="hover:text-gray-400">Work</Link>
            <Link href="/about" onClick={handleClick} className="hover:text-gray-400">About Us</Link>
            <Link href="/careers" onClick={handleClick} className="hover:text-gray-400">Careers</Link>
            <Link href="/contact" onClick={handleClick}>
              <span className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                Contact us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
