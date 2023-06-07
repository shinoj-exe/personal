import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from "react-icons/ti"
import {BsLink45Deg} from "react-icons/bs"

const TGH = () => {
  return (
    <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 0.1}} className='w-full'>
        <h3 className='flex flex-col mdl:flex-row gap-1 font-medium text-xl font-titleFont'>TGH Technologies <span className='text-textGreen tracking-wide flex items-center '> | Front End Developer Intern <a target="_blank" href='../assets/TGH_Internship_Certificate.pdf' className='text-textGreen mt-1  inline-flex '><BsLink45Deg/></a> </span> </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>September 2022 – October 2022</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Collaborated on replicating UI models from Figma designs, translating them into reusable React components while ensuring compatibility with optimized code practices.</li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Coordinated with the project team to ensure seamless integration of backend APIs into the frontend React
client-side application.</li>

        </ul>
    </motion.div>
  )
}

export default TGH