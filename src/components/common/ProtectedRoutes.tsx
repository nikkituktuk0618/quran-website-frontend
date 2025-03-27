import NotFound from '@/pages/NotFound'
import { decodeToken } from '@/utils/helper/tokens'
import React, { useEffect, useState } from 'react'

function ProtectedRoutes({children}) {
  const [loading,setLoading] = useState({
    loading:true,
    unautherized:false
  })

  useEffect(()=>{
    authenticateUser()
  },[])

  const authenticateUser = () =>{
    const decodedToken = decodeToken()
    if(!decodedToken){
      setLoading({
        loading:false,
        unautherized:true
      })
    }
    else if(decodedToken?.role === "admin"){
      setLoading({
        loading:false,
        unautherized:false
      })
    }else{
      setLoading({
        loading:false,
        unautherized:true
      })
    }
  }

  
  return (
    <div className='h-full'>
      {loading.loading ? <div className='h-screen w-screen flex items-center justify-center'>loading...</div>: loading.unautherized ? <NotFound/> : children}
    </div>
  )
}

export default ProtectedRoutes