import React from 'react'
import SectionTitle from './SectionTitle'
import {TbBadgeFilled} from "react-icons/tb"
import Image from 'next/image'
import { profileImg } from '@/public/assets'

const About = () => {
  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 lgl : py-32 flex flex-col gap-8">
        <SectionTitle titleHeading="About me" titleNo="1"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
               <p>Hello,My name is Shinoj Muraleedharan and I am a 20-year-old computer science engineering student in my third year at the College of Engineering Trivandrum. I am a <span className='text-textGreen'>Full stack web developer</span>  with a particular focus on front-end development. I have experience working on web development projects, having completed two internships in the field.</p>
               <p>I am passionate about programming and enjoy using my skills to build innovative and functional websites and web applications. I have experience working with several programming languages, including <span className='text-textGreen'>C, C++, JavaScript, and Python.</span></p>
               <p>One of my current interests is <span className='text-textGreen'>Blockchain technology</span>, and I am working on a final-year project using this technology. I am fascinated by the potential applications of blockchain and am excited to learn more about this field.</p>
               <p>In my free time, I enjoy reading about new technologies and programming techniques, as well as participating in online coding challenges. I am committed to continuously improving my skills and staying up-to-date with the latest industry developments.</p>
               <p>In the future, I hope to work in a dynamic and challenging environment where I can contribute my skills to create cutting-edge technology solutions.</p>

               <p>Here are a few technologies I have been working with recently: </p>
               <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>HTML/CSS/JavaScript
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>React JS
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Node JS
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Mongo DB
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Express JS
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>SQL/PSQL
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>C/C++/Java/Python
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Flutter
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Solidity
                </li>
                <li className='flex items-center gap-2'>
                    <span className='text-textGreen'><TbBadgeFilled></TbBadgeFilled></span>Web3 JS
                </li>

               </ul>
            </div>
            <div className='w-full lgl:w-1/3  relative group'>
                <div className='absolute w-full  -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'><Image className='rounded-lg h-full object-cover' src={profileImg} alt="profile_picture"/>
                    <div className='hidden mdl:inline-flex absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>

                        {/* <div className='hidden lgl: inline-block absolute w-full bg-textGreen rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div> */}
                    </div>
                </div>
                        <div className='hidden lgl:inline-flex w-full h-[480px] border-2  border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
        </div>
    </section>
  )
}

export default About