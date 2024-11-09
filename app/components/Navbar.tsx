import React from 'react'
import logo from '../assets/logo.svg'
import face from '../assets/face.jpg'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-[14vh] px-5 border-b bg-white z-50'>
        <Image alt='logo' src={logo} className='sm:w-60 w-40'/>
        <div className='sm:flex hidden gap-2 items-center border rounded-md px-2 py-2'>
            <Image className=' rounded-full w-8' src={face} alt='face'/>
            <p className='font-bold'>Agam Tyagi</p>
        </div>
    </div>
  )
}

export default Navbar