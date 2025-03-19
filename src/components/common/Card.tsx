/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface props {
    title:string,
    number:number,
    subText:string,
    icon?:any
    bg?:string
}

function Card({title,number,subText,icon,bg}:props) {
  return (
    <div style={{ backgroundColor: bg || "blue" }} className={` h-[150px] w-[150px] p-4 rounded-xl shadow-lg`}>
        <h1 className='font-sans font-semibold'>{title}</h1>
        <p className='text-2xl font-semibold'>{number}</p>
        <p className='text-xs'>{subText}</p>
    </div>
  )
}

export default Card