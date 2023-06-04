import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'

import { motion } from 'framer-motion'


const Archive = () => {
    const [showMore,setShowMore]=useState(false)
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
            <p className='text-sm font-titleFont text-textGreen'>view recent projects</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ArchiveCard 
            title="Ethers Lottery" 
            desc="This is a decentralized lottery app where users purchase tickets through smart contracts, ensuring fairness. The app handles ticket purchasing, prize distribution, winner selection, and secure random number generation."
            listItem={["Next JS","Solidity","Web3 JS","Ethereum"]}
            link="https://github.com/shinoj-exe/lottery_decentralisedApp"
            />

            <ArchiveCard 
            title="Cargo Flight Booking System" 
            desc="
            Developed a system for efficient goods movement management, including flight and route management, cargo booking, and comprehensive flight visibility for streamlined logistics. "
            listItem={["React JS","Axios","PSQL","Node JS"]}
            link="https://devfolio.co/projects/pharmatrust-9618"
            />

            <ArchiveCard 
            title="Restaurant Landing Page" 
            desc="Build a responsive design webpage using React. The design inspiration was taken from ui8.com, and the focus was on creating a scrollable gallery and ensuring responsiveness across different devices."
            listItem={["React JS"]}
            link="https://gericht-dinning.netlify.app/"
            />


        </div>
            {
                showMore && 
                <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 0.1}} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 lgl:px-10'>
                <ArchiveCard 
                title="Quote Generator" 
                desc="
                The project is a quote generator that uses the quotable API to generate random quotes and quotes based on tags. Users can also bookmark quotes for later reference."
                listItem={["React JS","Axios","Quotable API"]}
                link="https://frontend-task-tgh.netlify.app/"
                />
                
                <ArchiveCard 
                title="Shopping Cart Project" 
                desc="
                The project is a shopping cart application where users can add items to their cart for purchase. They have the ability to adjust the quantity of items needed. Redux is utilized for efficient state management within the app."
                listItem={["React JS","Redux","Axios"]}
                link="https://github.com/shinoj-exe/canteen-project"
                />
    
                <ArchiveCard 
                title="My Portfolio" 
                desc="The project is a portfolio website built exclusively using HTML, CSS, JavaScript, and Bootstrap. It was created as part of the FOSS MES portfolio creation challenge, where it won the Best Portfolio Award."
                listItem={["HTML","CSS","JavaScript","Bootstrap"]}
                link=" https://shinoj-muralee.netlify.app/"
                />
                </motion.div>
            }
        <div className='mt-12 flex items-center justify-center'>
            {
                showMore?
            <button onClick={()=>setShowMore(false)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show Less</button> :
            <button onClick={()=>setShowMore(true)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>Show More</button>
            }
        </div>
    </div>
  )
}

export default Archive