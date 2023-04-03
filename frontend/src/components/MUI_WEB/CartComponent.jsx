import React from 'react';
import { Box, Stack, Button, Card, Typography } from '@mui/material';
import nextIcon from '../../festive_assets/nextIcon.png';
import { productImage, productImage1 } from '../../utils/constants';
import { Link } from 'react-router-dom'

const CartComponent = () => {
  return (
    <Box className='Shopping__cart'>
    <Card sx={{height:'auto', width:'400px',pt:'30px',pb:'40px',px:'20px', mr:'30px'}}>
      <Typography sx={{fontWeight:600}}>Your order</Typography>
      <hr className='line__style'/>

      <Box className='cart__images' sx={{display:'flex', gap:'20px',py:'10px'}}>
        <img src={productImage} alt="nextIcon__image" className='nextIcon__image' />
        <Box className='item__amount'>
          <Typography>Google__Shoes</Typography> 
          <Typography>$300</Typography> 
          <Typography>Quantity:3</Typography> 

        </Box>
      </Box>

      <hr className='line__style'/>

      <Box className='cart__images' sx={{display:'flex', gap:'20px',py:'10px'}}>
        <img src={productImage1} alt="nextIcon__image" className='nextIcon__image' />
        <Box className='item__amount'>
          <Typography>Jordan-Sneakers</Typography> 
          <Typography>$300</Typography> 
          <Typography>Quantity:2</Typography> 

        </Box>
      </Box>

      <hr/>

      <Typography sx={{fontSize:'20px', fontWeight:600, pl:'50px', pt:'10px',color:'#382C67'}}>
       Total: $600
       </Typography>

    </Card>
 </Box>
  )
}

export default CartComponent