import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../contex/AuthContex'

const ProtectedRoutes = ({Children}) => {
const {user } = UserAuth()

if(!user){
    return <Navigate to='/login' />
}else{
    return Children
}
  
}

export default ProtectedRoutes
