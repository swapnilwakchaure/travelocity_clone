import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Home from './../Pages/Home';

const MainRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default MainRoutes