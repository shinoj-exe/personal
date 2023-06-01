import { logo } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titlefont flex items-center justify-between ">
        <div>
          {/* <Image className='w-14' src={logo} alt="Logo" /> */}
          <span className='text-base md:text-lg text-textGreen '>SHINOJ</span>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar