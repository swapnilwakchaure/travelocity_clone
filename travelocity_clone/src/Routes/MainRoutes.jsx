import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home';
// import Login from '../Pages/Login';
// import Signup from '../Pages/Signup';
// import Products from "../Pages/Product/Products";
// import SingleProduct from "../Pages/SingleProduct/HotelDetail";
import PageNotFound from "../Pages/PageNotFound";

const MainRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/products' element={<Products />} /> */}
        {/* <Route path='/products/:id' element={<SingleProduct />} /> */}
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default MainRoutes