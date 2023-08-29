import { PasswordInput, TextInput } from '@mantine/core';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/services/authSlice';

function Login() {
  const [email,setEmail]=useState("testingasdf@gmail.com");
  const [password,setPassword]=useState("password12345678");
  const [login]=useLoginMutation();
  const nav=useNavigate();
  const dispath=useDispatch();

  const loginHandler=async (e)=>{
    try{
        e.preventDefault();
      const user={email,password}
      const {data}=await login(user);

      dispath(addUser({user:data?.user.name,token:data?.token,email:data?.user.email}))

      if(data.success){
        nav("/");
      }
    }
    catch(err){
      console.log(err);
    }

  }
  return (
    <div>
          <div onSubmit={loginHandler} className='flex justify-center items-center bg-gray-50 h-screen'>
       <form className=' w-96 flex flex-col gap-10 shadow-lg p-7'>
        <h2 className='text-gray-500 font-medium text-center text-2xl'>Register</h2>
        <TextInput type='text' placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}></TextInput>
        <PasswordInput type='text' placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)}></PasswordInput>
        <div className="flex gap-3">
            <p className='select-none text-gray-700'>
                Dont Have a Account?
            </p>
           <Link to={"/"} className='active'>
           <p className='cursor-pointer select-none text-gray-700'>Register</p>
           </Link>
        </div>
        <button type='submit' className='bg-blue-700 text-white px-4 py-1'>Sign In</button>
       </form>
    </div>
    </div>
  )
}

export default Login