import React from 'react'

function ProtectedRoutes({children}) {
  return (
    <div className='h-full'>{children}</div>
  )
}

export default ProtectedRoutes