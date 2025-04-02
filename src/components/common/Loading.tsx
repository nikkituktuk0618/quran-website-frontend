import { Skeleton } from 'antd'
import React from 'react'

function Loading() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <div className='w-[70%]'><Skeleton active/></div>
    </div>
  )
}

export default Loading