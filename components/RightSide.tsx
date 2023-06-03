import React from 'react'

const RightSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-14 text-textLight'>
        <a href="mailto:shinojmuralee@gmail.com">
            <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen hover:-translate-y-6 transition-all duration:300'>shinojmuralee@gmail.com</p>
        </a>
        <span className='w-[2px] h-32 bg-textDark inline-flex' ></span>
    </div>
  )
}

export default RightSide