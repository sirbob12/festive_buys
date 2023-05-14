import React from 'react'
import { Box, Typography } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { Dashboard, Analytics, Order, Transactions } from '../pages/backend';


const Feed = () => {
 
  return (
    <Box className='right__section' sx={{flex:'auto'}}>
       <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/analytics' element={<Analytics/>}/>

       </Routes>
    </Box>
  )
}

export default Feed