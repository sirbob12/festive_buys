import React from 'react'
import {Box, Typography, Card, Paper } from '@mui/material';
import { productData, productImage } from '../../utils/constants';

const Consideration = () => {
  return (
    <Box sx={{mb:'50px', mt:'50px'}}>
        <Typography sx={{fontSize:'25px', fontWeight:500, mt:'30px', color:'#382C67',ml:'50px', pb:'30px'}}>Customers also considered</Typography>
        <Box sx={{display:'flex', gap:'20px', ml:'40px'}}>
          {productData.map((product)=>(
            <Card sx={{height:'auto', width:'300px'}} >
              <img src={product.img} alt="product_image" className='product__image' style={{height:'150px',}}/>
              <Typography>{product.name}</Typography>
              <Typography>{product.price}</Typography>
            </Card>
          ))}
        </Box>
      </Box>

  )
}

export default Consideration