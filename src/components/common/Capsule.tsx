import React from 'react'

interface prop {
    data:{title:string}[]
    onClick?:(item:string)=>void
}

function Capsule({data,onClick}:prop) {
  return (
    <div className='flex gap-3 flex-wrap'>
        {
            data.map((item,index)=>(
                <div key={index} className='border px-4 py-2 rounded-full bg-red-300 text-white cursor-pointer' onClick={()=>onClick?.(item.title)}>
                    {item.title}
                </div>
            ))
        }
    </div>
  )
}

export default Capsule