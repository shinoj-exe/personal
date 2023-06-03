import React from 'react'
import {TbBrandGithub,TbBrandTwitter,TbBrandWhatsapp,TbBrandInstagram,TbBrandLinkedin} from "react-icons/tb"
import {AiOutlineLinkedin,AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai"


const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className='flex flex-col gap-4 '>
            <a href="https://github.com/shinoj-exe" target='_blank'><span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandGithub/></span></a>

            <a href="https://www.linkedin.com/in/shinoj-muraleedharan/" target='_blank'><span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandLinkedin/></span></a>

            <a href="https://twitter.com/ShinojMuralee" target='_blank'><span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandTwitter/></span></a>

            <a href="https://api.whatsapp.com/send/?phone=%2B918943194451&text=Hello&type=phone_number&app_absent=0" target='_blank'><span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandWhatsapp/></span></a>

            <a href="https://www.instagram.com/heyshinojjj/" target='_blank'><span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"><TbBrandInstagram/></span></a>
        </div>
        <div className='w-[2px] h-32 bg-textDark' ></div>
    </div>
  )
}

export default LeftSide