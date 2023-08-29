import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { removeUser } from '../redux/services/authSlice';

function Navbar() {
    const user=JSON.parse(Cookies.get("name"));
    const email=JSON.parse(Cookies.get("email"));
    const token=Cookies.get("token");
    const dispath=useDispatch();
    console.log(user);

    const [logout]=useLogoutMutation();
    const nav=useNavigate()

    const logoutHandler=async (e)=>{
        e.preventDefault();
        const {data}= await logout(token);
        dispath(removeUser());
        nav("/login");

    }
  return (
    <div className='flex justify-around p-7 shadow-sm  items-center '>
        <div>
            <h2 className=' font-medium text-gray-700'>Dashboard</h2>
        </div>
      <div className=" flex gap-5 items-center justify-end">
      <div className=' flex flex-col gap-3'>
            <p>{user}</p>
            <p>{email}</p>
        </div>
        <div className='flex'>
            <form onSubmit={logoutHandler} id='logoutForm'>

            </form>
            <button form='logoutForm' type='submit' className="bg-red-500 px-4 py-1">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar