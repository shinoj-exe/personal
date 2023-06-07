import React from 'react'
import { motion } from 'framer-motion'


const Banner = () => {
  return (
    <section id='home' className="max-w-contentContainer mx-auto py-10 mdl : py-24 flex flex-col gap-4 lgl : gap-8 mdl : px-10 xl : px-4">
        <motion.h3 initial={{y : 10, opacity : 0 }} animate={{ y : 0, opacity : 1 }} transition={{ duration : 0.5, delay : 0.6}} className="text-lg font-titleFont tracking-wide text-textGreen" >Hi, my name is</motion.h3>
        <motion.h1 initial={{y : 10, opacity : 0 }} animate={{ y : 0, opacity : 1 }} transition={{ duration : 0.5, delay : 0.7}} className=" text-4xl  lgl:text-6xl font-titleFont font-semibold flex flex-col">Shinoj Muraleedharan <span className="text-textDark mt-2 lgl : mt-4"> Web Devloper | Blockchain Developer.</span> </motion.h1>
        <motion.p initial={{y : 10, opacity : 0 }} animate={{ y : 0, opacity : 1 }} transition={{ duration : 0.5, delay : 0.8}} className="text-base md : max-w-[650px] text-textDark font-medium">
            {" "}
             I have a comprehensive understanding of both frontend and backend development, allowing me to create dynamic and interactive web applications. With expertise in HTML, CSS, and JavaScript, I am capable of crafting visually appealing and responsive user interfaces. 
            {/* I am a 20-year-old computer science engineering student in my third year at the College of Engineering Trivandrum. I am a full stack web developer with a particular focus on front-end development.
            I am passionate about programming and enjoy using my skills to build innovative and functional websites and web applications. I have experience working with several programming languages, including C, C++, JavaScript, and Python. */}
            {" "}
            <br></br>
            <a  href="#about"><span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>Learn More <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span></span></a>
        </motion.p>
        <motion.button initial={{y : 10, opacity : 0 }} animate={{ y : 0, opacity : 1 }} transition={{ duration : 0.5, delay : 0.9}} className= "w-52 h-14 text-sm font-titlefont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"><a target='_blank' href="https://github.com/shinoj-exe?tab=repositories"> Check out all my projects!</a></motion.button>
        {/* <motion.p initial={{y : 10, opacity : 0 }} animate={{ y : 0, opacity : 1 }} transition={{ duration : 0.5, delay : 0.8}} className="text-base md : max-w-[650px] text-textDark font-medium">
            {" "}
            I am also a Blockchain Developer who is fascinated by the potential applications of blockchain and am excited to learn more about this field.
            In the future, I hope to work in a dynamic and challenging environment where I can contribute my skills to create cutting-edge technology solutions.
            {" "}
        </motion.p> */}
    </section>
  )
}

export default Banner