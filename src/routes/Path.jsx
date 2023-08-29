import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Routeguard from '../components/Routeguard'

function Path() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Routeguard><Dashboard></Dashboard></Routeguard>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
       </Routes>
    </div>
  )
}

export default Path