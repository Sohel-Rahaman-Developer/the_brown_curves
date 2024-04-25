import React from 'react'

function Heading({headingText }) {
  return (
    <div className='w-full flex justify-center items-center gap-4 mt-[35px]'>
        <div className="line-heading w-[150px] h-[1px] bg-black"></div>
        <h2 className='font-bold text-[35px] '>{headingText }</h2>
        <div className="line-heading w-[150px] h-[1px] bg-black"></div>
    </div>
  )
}

export default Heading