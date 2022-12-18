import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Home from './../Pages/Home/Home';
import { Signup_Welcome } from './../Pages/Signup/Signup_Welcome';
import Checkout from './../Pages/Checkout/Checkout';
import Products from '../Pages/Product/Products';
import HotelCard from '../Components/SingleHotel/HotelCard';
// import Temp from '../Pages/Temp';

const MainRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleHotel' element={<HotelCard/>}/>
        
        <Route path='/checkout' element={<Checkout />} />
        {/* <Route path='/temp' element={<Temp />} /> */}
        <Route path='/signup/welcome' element={<Signup_Welcome />} />
    </Routes>
  )
}

export default MainRoutes