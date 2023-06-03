import React from 'react'
import {TbBrandGithub,TbBrandTwitter,TbBrandWhatsapp,TbBrandInstagram,TbBrandLinkedin} from "react-icons/tb"


const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href="https://github.com/shinoj-exe" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandGithub/></span></a>

<a href="https://www.linkedin.com/in/shinoj-muraleedharan/" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandLinkedin/></span></a>

<a href="https://twitter.com/ShinojMuralee" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandTwitter/></span></a>

<a href="https://api.whatsapp.com/send/?phone=%2B918943194451&text=Hello&type=phone_number&app_absent=0" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandWhatsapp/></span></a>

<a href="https://www.instagram.com/heyshinojjj/" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandInstagram/></span></a>
    </div>
  )
}

export default Footer