import React from 'react'
import {TiArrowForward} from "react-icons/ti"
import {TfiEmail} from "react-icons/tfi"
import {VscLocation} from "react-icons/vsc"
import {FiPhoneCall} from 'react-icons/fi'
import {SlLocationPin} from "react-icons/sl"


const Contact = () => {
  return (
    <div id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
    items-center justify-center'>
        <p className='font-titlefont text-lg text-textGreen font-semibold flex
items-center tracking-wide'>04. Whats Next?</p>
<h2 className='font-titleFont text-5xl font-semibold'>Get in Touch</h2>
<p className='max-w-[850px] text-center text-textDark'>Seeking a challenging position to apply technical expertise in developing
high-quality web applications. Proficient in frontend development languages, web frameworks, and backend
development languages. Skilled in developing and integrating web services and APIs to Front end, version control
systems, and agile development methodologies. Detail-oriented, passionate, and committed to writing clean, well documented
code and staying up-to-date with the latest web development trends and technologies.</p>

<div className='w-full '>

<ul className='flex flex-col text-xs font-bold md:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>

<li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><FiPhoneCall/></span>+91 89431 94451</li>
<li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TfiEmail/></span>shinojmuralee@gmail.com</li>
<li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><SlLocationPin/></span>Tirur,Malappuram,Kerala,India</li>

</ul>
</div>

<a href="mailto:shinojmuralee@gmai.com">
<button className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Say Hello</button>
</a>


    </div>
  )
}

export default Contact