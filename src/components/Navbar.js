import { async } from '@firebase/util'
import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/Authcontext'
const Navbar = () => {
  const {user,logOut}=UserAuth()
  
  const navigate = useNavigate();
  const handlelogout=async()=>{
    try{
      await logOut();
      Navigate('./')
    }
    catch(error){
      console.log(error)
    }
  }
  return (
   
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='./'>
        <h1 className='sm:text-small text-red-600 md:text-red-600 font-bold cursor-pointer text-4xl'>NETFLIX</h1>
        </Link>
        <div>
          {user?.email?(
            <div>
                <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
            </Link>
           
            <button className='bg-red-600 px-4 py-2 cursor-pointer rounded text-white' onClick={handlelogout}>Log Out</button>
           
            </div>
          )
          :(
            <div>
            <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='./signup'>
        <button className='bg-red-600 px-4 py-2 cursor-pointer rounded text-white'>Sign Up</button>
        </Link>
        </div>
          )
          }
        
        </div>
    </div>
  )
}

export default Navbar