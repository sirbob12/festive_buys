import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
 import { Home, Productpage, PricePage, Cart }  from '../pages' 
 import { Navbar, Footer } from '../MUI_WEB';
 

const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/productpage/:id'  element={<Productpage/>}/>
           <Route path='/pricePage' element={<PricePage/>}/>
           <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>

        </BrowserRouter>
    
  )
}

export default Navigation