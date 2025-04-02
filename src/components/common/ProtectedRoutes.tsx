import NotFound from '@/pages/NotFound'
import { decodeToken } from '@/utils/helper/tokens'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
  const [loading,setLoading] = useState({
    loading:true,
    unautherized:false
  })

  const navigate = useNavigate();

  useEffect(()=>{
    authenticateUser()
  },[])

  const authenticateUser = () =>{
    const decodedToken = decodeToken()
    if(decodedToken?.role === "admin"){
      setLoading({
        loading:false,
        unautherized:false
      })
    }else{
      setLoading({
        loading:false,
        unautherized:true
      })
      navigate("/dailyquran/admin/login")
    }
  }

  
  return (
    <div className='h-full'>
      {loading.loading ? <div className='h-screen w-screen flex items-center justify-center'>loading...</div>: loading.unautherized ? "loading..." : children}
    </div>
  )
}

export default ProtectedRoutes