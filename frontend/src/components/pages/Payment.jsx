import React from 'react'
import { Box, Typography, Button, Card, Container } from '@mui/material';
import google from '../../festive_assets/google.png';
import paypal from '../../festive_assets/paypal.png';
import { CartComponent, Consideration } from '../MUI_WEB'
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
  return (
     <Box sx={{mt:'40px', pb:'200px'}}>
      <Container>
        <Typography sx={{fontSize:'20px', fontWeight:600}}>Payment</Typography>

        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            
            <Box sx={{mt:'100px', ml:'100px'}}>
            <PayPalScriptProvider options={{ clientId: "test" }} >
               <PayPalButtons/>

            
            </PayPalScriptProvider>
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