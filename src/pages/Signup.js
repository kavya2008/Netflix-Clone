import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/Authcontext'
const Signup = () => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const{user,signUp}=UserAuth()
    const navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
            await signUp(email,password)
            navigate('/')
        }
        catch(error){
            console.log(error)
        }
    }
  return (
   <div className='w-full h-screen'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c8c8a0ad-86d6-45f1-b21d-821afa4e5027/121450d3-2d2f-41a9-acd6-b050ca0e0424/IN-en-20220801-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''
    className='hidden sm:block w-full h-full object-cover absolute'
    ></img>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='flex flex-col' onSubmit={handlesubmit}>
                <input type='email' autoComplete='email' placeholder='Email' 
                className='rounded bg-gray-800 text-gray-50 mt-6 py-3 px-3'onChange={(e)=>setemail(e.target.value)}></input><br></br>
                <input type='password' placeholder='Password' autoComplete='password' className='rounded bg-gray-800 text-gray-50 py-3 px-3' onChange={(e)=>setpassword(e.target.value)}></input>
                <br></br>
                <button className='rounded py-2 px-4 mt-4 text-white font-bold bg-red-600 cursor-pointer hover:bg-red-800'>Sign Up</button>
              <div className='flex items-center justify-between text-sm text-gray-600 mt-6'>
              <p><input type="checkbox"/>Remember Me</p>
              <p>Need Help</p>
              </div>
              <p className='py-8'>
                  <span className='text-gray-600'>
                    Already subscribed to Netflix?
                  </span>{''}
                  <Link to='/login'> Sign In</Link>
                 
                  </p>
              </form>
              </div>
              </div>
              </div>
   </div>
  )
}

export default Signup