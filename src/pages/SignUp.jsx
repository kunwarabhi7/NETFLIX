import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../contex/AuthContex'

const SignUp = () => {
  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')
const {user, signUpUser} = UserAuth()
const navigate = useNavigate()

const handleFormSubmit = async(e) => {
  e.preventDefault()
  try{
      await signUpUser(email,password)
      navigate('/')
  }
  catch(error){
      alert(error.message)

  }
}
  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/c08e0e8a-d28f-4d82-bf93-0a9531b58a6d/IN-en-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="image" />
<div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z=50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Sign Up
          </h1>
          <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
            <input className='p-3 my-2 bg-gray-800' onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Email or phone number' autoComplete='email' />
            <input  className='p-3 my-2 bg-gray-800'type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} autoComplete='current-Password' />
         <button className='bg-red-600 py-3 my-6 rounded '>Sign UP</button>
         <div className='flex justify-between items-center text-sm text-gray-600'>
          <p><input className='mr-2' type="checkbox" /> Remember me</p>
          <p>Need help ? </p>
         </div>
        
           </form>
        </div>

      </div>
    </div>
    </div> 
      
   
    </>
  )
}

export default SignUp