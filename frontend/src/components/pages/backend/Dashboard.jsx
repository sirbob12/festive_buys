import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/productsSlice'

//import actions from form the countSlice


const Dashboard = () => {

  const products = useSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())  
  }, [dispatch])
  
  console.log(products)

  return (
    <Box sx={{}}>
       <Typography sx={{fontSize:'35px', fontWeight:'bold',textAlign:'center'}}>Product Page</Typography>


    </Box>
  )
}

export default Dashboard