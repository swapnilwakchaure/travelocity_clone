import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Home from './../Pages/Home/Home';
import { Signup_Welcome } from './../Pages/Signup/Signup_Welcome';
import Checkout from './../Pages/Checkout/Checkout';

const MainRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signup/welcome' element={<Signup_Welcome />} />
    </Routes>
  )
}

export default MainRoutes