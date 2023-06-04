import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from "react-icons/ti"
import {BsLink45Deg} from "react-icons/bs"

const CSBUDDY = () => {
  return (
    <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 0.1}} className='w-full'>
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>CSBUDDY <span className='text-textGreen tracking-wide'> | Web Developer Intern</span> <a target="_blank" href='../assets/CSBUDDY_Internship_Certificate.pdf' className='text-textGreen mt-1'><BsLink45Deg/></a></h3>
        <p className='text-sm mt-1 font-medium text-textDark'>July 2022– January 2023</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Collaborated closely with clients to understand design requirements and developed visually appealing and
functional user interfaces using HTML, CSS, JavaScript, and PHP Templates.</li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Developed responsive and interactive web pages, adhering to best practices and industry standards, while
effectively utilizing templates to streamline development processes.</li>
        </ul>
    </motion.div>
  )
}

export default CSBUDDY