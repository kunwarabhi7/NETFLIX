import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../contex/AuthContex'
import { auth } from '../firebase'


const NavBar = () => {
  const {signOutUser , user} = UserAuth()
  // console.log('user')
  const navigate = useNavigate()

  const signOut = () => {
    signOutUser(auth)
    navigate('/login')
  }

   return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <Link to='/'>
        <h1 className='text-red-600 text-4xl cursor-pointer font-bold '>NETFLIX</h1>
        </Link>
        
         {user ? 
        <div>
          <Link to='/account'>
        <button className='text-white pr-4'>ACCOUNT</button>
          </Link>
          <Link to='/signup'>
        <button onClick={signOut} className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign OUT</button>
          </Link>
        </div>
        : 
        <div>
          <Link to='/login'>
        <button className='text-white pr-4'>Sign IN</button>
          </Link>
          <Link to='/signup'>
        <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
        </div>
         }
          </div>
  )
}

export default NavBar