import React from 'react'
import { Box, Typography, Button, Card, Container } from '@mui/material';
import google from '../../festive_assets/google.png';
import paypal from '../../festive_assets/paypal.png';
import { CartComponent, Consideration } from '../MUI_WEB'
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
     <Box sx={{mt:'40px', pb:'200px'}}>
      <Container>
        <Typography sx={{fontSize:'20px', fontWeight:600}}>Payment</Typography>

        <Box sx={{display:'flex', justifyContent:'space-between'}}>

            <Box sx={{display:'flex', gap:'40px',mt:'100px'}}>
               <Card sx={{height:'200px', px:'20px'}}><img src={paypal} alt="" className="paypal" /></Card> 
               <Card sx={{height:'200px'}}><img src={google} alt="" className="google" /></Card> 
            </Box>
            
            <Box className='cart__section'> 
            <CartComponent/>
            </Box>

        </Box>
        </Container>
         
         
        <Consideration/>

     </Box>
  )
}

export default Payment