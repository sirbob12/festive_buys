import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material';
 import { Home, Productpage, PricePage, ShoppingCart, Payment, Signup }  from '../pages' 
 import { Admin } from '../pages/backend';
 import { Navbar, Footer } from '../MUI_WEB';
 

const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/products/:id'  element={<Productpage/>}/>
           <Route path='/pricePage' element={<PricePage/>}/>
           <Route path='/cart' element={<ShoppingCart/>}/>
           <Route path='/payment' element={<Payment/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path="/admin/*" element={<Admin/>}/>
          
        </Routes>
        <Footer/>

        </BrowserRouter>
    
  )
}

export default Navigation