import React from 'react'
import { motion } from 'framer-motion'
import {TiArrowForward} from "react-icons/ti"

const IEEE = () => {
  return (
    <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 0.1}} className='w-full'>
        <h3 className='flex flex-col mdl:flex-row gap-1 font-medium text-xl font-titleFont'>IEEE Student Branch CET <span className='text-textGreen tracking-wide flex items-center '> | Webmaster </span> </h3>
        
        <p className='text-sm mt-1 font-medium text-textDark'>May 2023– Present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Responsible for maintaining and handling the IEEE Student Branch of CET website, ensuring its functionality,
accuracy, and user experience on an ongoing basis.</li>
            <li className='text-base flex gap-2 text-textDark'><span className='text-textGreen mt-1'><TiArrowForward/></span>Lead and collaborate with a team of web developers to implement solutions, regularly update the website, and
enhance its design and functionality according to IEEE branding guidelines and organizational goals.</li>

        </ul>
    </motion.div>
  )
}

export default IEEE