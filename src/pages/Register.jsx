import { PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../redux/api/authApi'

function Register() {
    const [register]=useRegisterMutation();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [password_confirmation,setPasswordConfirmation]=useState("");
    const nav=useNavigate()
    const registerHandler= async (e)=>{
       try{
        e.preventDefault();
        const user={name,email,password,password_confirmation};
        const {data}=await register(user);
        

        if(data.success){
          nav("/login");
        }
       }
       catch(e){
        console.log(e);
       }
    }
  return (
    <div onSubmit={registerHandler} className='flex justify-center items-center bg-gray-50 h-screen'>
       <form className=' w-96 flex flex-col gap-10 shadow-lg p-7'>
        <h2 className='text-gray-500 font-medium text-center text-2xl'>Register</h2>
       <TextInput type='text' placeholder='Enter Your Name' value={name} onChange={(e)=> setName(e.target.value)}></TextInput>
        <TextInput type='text' placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}></TextInput>
        <PasswordInput type='text' placeholder='Enter Your Password' value={password} onChange={(e)=> setPassword(e.target.value)}></PasswordInput>
        <PasswordInput type='text' placeholder='Confirm Your Password' value={password_confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}></PasswordInput>
        <div className="flex gap-3">
            <p className='select-none text-gray-700'>
                Already Have An Account?
            </p>
           <NavLink to={"/"} className='active'>
           <p className='cursor-pointer select-none text-gray-700'>Login</p>
           </NavLink>
        </div>
        <button type='submit' className='bg-blue-700 text-white px-4 py-1'>Sign Up</button>
       </form>
    </div>
  )
}

export default Register