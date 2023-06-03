import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import TGH from './works/TGH'
import CSBUDDY from './works/CSBUDDY'
import IEEE from './works/IEEE'

const Experience = () => {
    const [tgh,setTgh]=useState(true);
    const [ieee,setIeee]=useState(false);
    const [csbuddy,setCsbuddy]=useState(false);

    const handleTgh=()=>{
        setTgh(true)
        setCsbuddy(false)
        setIeee(false)
    }

    const handleIeee=()=>{
        setTgh(false)
        setCsbuddy(false)
        setIeee(true)
    }

    const handleCsbuddy=()=>{
        setTgh(false)
        setCsbuddy(true)
        setIeee(false)
    }

  return (
    <section id='experience' className='max-w-containerxs mx-auto py-10 1gl:py-24 px-4'>
        <SectionTitle titleHeading='Where I have worked' titleNo='2' />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleTgh} className={` ${tgh? " border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark "} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>TGH Technologies</li>
            <li onClick={handleIeee}  className={` ${ieee? " border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark "} border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>IEEE SB CET</li>

            <li  onClick={handleCsbuddy} className={` ${csbuddy? " border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark "} border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>CSBUDDY</li>
            </ul>
            {
                tgh &&
                <TGH/>
            }
            {
                csbuddy &&
                <CSBUDDY/>
            }
            {
                ieee &&
                <IEEE/>
            }
        </div>
    </section>
  )
}

export default Experience