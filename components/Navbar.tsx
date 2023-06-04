import { logo } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import {TbBrandGithub,TbBrandTwitter,TbBrandWhatsapp,TbBrandInstagram,TbBrandLinkedin} from "react-icons/tb"
import { motion } from 'framer-motion'
import React,{useRef, useState} from 'react'
import {IoMdClose} from "react-icons/io"

const Navbar = () => {
  const ref=useRef<string | any>("");
  const [showMenu,setShowMenu] = useState(false)
  const handleScroll=(e: React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>{
    e.preventDefault()
    setShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/,"");
    const elem=document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior:"smooth",
    });
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link)=>{
      link.classList.remove("active")
    });
    e.currentTarget.classList.add("active")
  };

  const handleClick=(e:any)=>{
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 1g:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titlefont flex items-center justify-between ">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          {/* <Image className='w-14' src={logo} alt="Logo" /> */}
          <span className='text-base md:text-lg text-textGreen '>SHINOJ</span>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className='flex text-[12px] gap-7'>
            <Link onClick={handleScroll} href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li  initial={{ y: -10, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.1 }}>Home</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ y: -10, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.1,delay:0.1 }}><span className='text-textGreen'>0.1</span> About</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#experience" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ y: -10, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.1,delay:0.2 }}><span className='text-textGreen'>0.2</span> Experience</motion.li>
            </Link>
            <Link onClick={handleScroll}  href="#project" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ y: -10, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.1 ,delay:0.3}}><span className='text-textGreen'>0.3</span> Project</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ y: -10, opacity: 0 }}
                       animate={{ y: 0, opacity: 1 }}
                       transition={{ duration: 0.1,delay:0.4}}><span className='text-textGreen'>0.4</span> Contact</motion.li>
            </Link>
          </ul>
          <a href="/assets/Resume_Shinoj_Muraleedharan.pdf" target='_blank'>

          <motion.button initial={{  opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.5 }} className="px-4 py-2 rounded-md text-textGreen text-[13px] border  border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button>
          </a>
        </div>
        <div onClick={()=>{setShowMenu(true)}} className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end' ref={(node)=>(ref.current=node)} onClick={handleClick} >
              <motion.div initial={{ x:20, opacity: 0 }}
                       animate={{x:0, opacity: 1 }}
                       transition={{ delay: 0.1 }} className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative'>
                        <IoMdClose onClick={()=>setShowMenu(false)} className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'/>
                        <div className='flex flex-col  items-center gap-7'>
                        <ul className='flex flex-col  items-center gap-7'>
            <Link onClick={handleScroll} href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li  initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.1,ease:"easeIn" }}>Home</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.2,ease:"easeIn" }}><span className='text-textGreen'>0.1</span> About</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#experience" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.3,ease:"easeIn" }}><span className='text-textGreen'>0.2</span> Experience</motion.li>
            </Link>
            <Link onClick={handleScroll}  href="#project" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.4,ease:"easeIn" }}><span className='text-textGreen'>0.3</span> Project</motion.li>
            </Link>
            <Link  onClick={handleScroll} href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
            <motion.li initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.5,ease:"easeIn" }}><span className='text-textGreen'>0.4</span> Contact</motion.li>
            </Link>
          </ul>
          <a href="/assets/Resume_Shinoj_Muraleedharan.pdf" target='_blank'>

          <motion.button initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.2,delay:0.6,ease:"easeIn" }} className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover : bg-hoverColor duration-300">Resume</motion.button>
          </a>

          <div className=' flex  gap-4'>
        <a href="https://github.com/shinoj-exe" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandGithub/></span></a>

<a href="https://www.linkedin.com/in/shinoj-muraleedharan/" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandLinkedin/></span></a>

<a href="https://twitter.com/ShinojMuralee" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandTwitter/></span></a>

<a href="https://api.whatsapp.com/send/?phone=%2B918943194451&text=Hello&type=phone_number&app_absent=0" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandWhatsapp/></span></a>

<a href="https://www.instagram.com/heyshinojjj/" target='_blank'><span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover: border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-al1 duration-300"><TbBrandInstagram/></span></a>
    </div>


                        </div>
                        <motion.a initial={{ opacity : 0}} animate={{ opacity : 1}} transition={{ delay : 1.2, ease : "easeIn"}} className="text-sm w-72 tracking-widest text-textGreen text-center mt-4" href="mailto : noor.jsdivs@gmail.com"> <p>reactbd@proton.me</p> </motion.a>
              </motion.div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar