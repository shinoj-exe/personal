import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { pharmaTrustCover, slackImage, socialNetwork } from '@/public/assets'
import {TbBrandGithub} from "react-icons/tb"
import {TfiNewWindow} from "react-icons/tfi"


const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-32 py-24'>
        <SectionTitle titleHeading='Some Projects I’ve Built' titleNo='2' />
        <div className='w-full flex flex-col items-center justify-between gap-24 mt-10'>
            {/* project 1 */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="https://devfolio.co/projects/pharmatrust-9618" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain' src={pharmaTrustCover} alt='PahrmTrust'/>
                        <div className='hidden mdl:inline-flex absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                    </a>
                    <div className='w-full ml-0 xl:w-1/2 flex flex-col gap-6 lgl: justify-between items-end text-right xl: -ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                        <h3 className='text-xl font-bold'>PharmaTrust: A cure for counterfeit drugs</h3>
                        <p className='shadow-navbarShadow bg-[#112240] text-sm md: text-base p-2 md:p-6 rounded-md'>
                        This project utilizes blockchain technology to prevent the distribution of counterfeit drugs. By ensuring a secure and transparent system, it tracks medicine manufacturing, distribution, and consumption in real-time. This solution safeguards patient safety, enhances supply chain integrity, and mitigates the risks associated with counterfeit medications.
                        </p>
                        <ul className='text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md: gap-5 justify-between text-textDark'>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>Solidity</li>
                            <li>Web3 JS</li>
                            <li>Ethereum</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a target='_blank' className='hover:text-textGreen duration-300' href="https://github.com/shinoj-exe/pharma_trust" ><TbBrandGithub/></a>
                            <a target='_blank' className='hover:text-textGreen duration-300' href="https://devfolio.co/projects/pharmatrust-9618" ><TfiNewWindow/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project 2 */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row-reverse gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="https://github.com/shinoj-exe/social-network" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain' src={socialNetwork} alt='SocialNetwork'/>
                        <div className='hidden mdl:inline-flex absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl: justify-between items-start text-left    z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                        <h3 className='text-2xl font-bold'>Social Network</h3>
                        <p className='shadow-navbarShadow  bg-[#112240] text-sm md: text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                        I successfully built a social media application using the MERN stack. This replica of a popular social network incorporated key functionalities, including user authentication, profile management, and friend connections. Has features like user search, profile viewing, mutual friends, and the ability to add or remove friends. Additionally, I enabled users to create and post content seamlessly to the feed, delivering an engaging social experience.
                        </p>
                        <ul className='text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md: gap-5 justify-between text-textDark'>
                            <li>React JS</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>Express JS</li>
                            <li>Ethereum</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a  target='_blank' className='hover:text-textGreen duration-300' href="https://github.com/shinoj-exe/social-network" ><TbBrandGithub/></a>
                            <a target='_blank'  className='hover:text-textGreen duration-300' href="https://www.loom.com/share/3eb9d8bb33d740fc97446964c40df341" ><TfiNewWindow/></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* project 3 */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="https://shinoj-exe.github.io/SLACK-Frontend-Clone/" target='_blank'>
                    <div>
                        <Image className='w-full h-full object-contain' src={slackImage} alt='SlackWebsite'/>
                        <div className='hidden mdl:inline-flex absolute w-full h-full bg-textGreen/30 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300'></div>
                    </div>
                    </a>
                    <div className='w-full ml-0 xl:w-1/2 flex flex-col gap-6 lgl: justify-between items-end text-right xl: -ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                        <h3 className='text-2xl font-bold'>SLACK Website Front-End Clone</h3>
                        <p className='shadow-navbarShadow bg-[#112240] text-sm md: text-base p-2 md:p-6 rounded-md'>
                        Built a fully functional clone of the website SLACK using HTML, CSS, and JavaScript, demonstrating proficiency in front-end web technologies and showcasing strong problem-solving skills in web development.
                        </p>
                        <ul className='text-xs md:text-sm font-titlefont tracking-wide flex gap-2 md: gap-5 justify-between text-textDark'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a target='_blank' className='hover:text-textGreen duration-300' href="https://github.com/shinoj-exe/SLACK-Frontend-Clone" ><TbBrandGithub/></a>
                            <a target='_blank' className='hover:text-textGreen duration-300' href="https://shinoj-exe.github.io/SLACK-Frontend-Clone/" ><TfiNewWindow/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects