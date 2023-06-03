import React from 'react'
import {FaRegFolder} from 'react-icons/fa'
import {TfiNewWindow} from "react-icons/tfi"
interface Props{
    title:string;
    desc:string;
    listItem:string[];
    link:string
}

const ArchiveCard = ({title,desc,listItem,link}:Props) => {
  return (
    <a href={link} target='_blank'>
        <div className='w-full  shadow-navbarShadow h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
            <div className='flex justify-between items-center'>
            <FaRegFolder className='text-4xl text-textGreen'/>
            <TfiNewWindow className='text-4xl hover:text-textGreen'/>
            </div>
            <div>
                <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen'>{title}</h2>
                <p className='text-sm mt-3'>{desc}</p>
            </div>
            <ul className='text-xs md:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
                {
                    listItem.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>            
        </div>
    </a>
  )
}

export default ArchiveCard