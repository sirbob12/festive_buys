import React from 'react';
import { Box, Typography, Card, Paper, Container, Grid, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import nextIcon from '../../festive_assets/nextIcon.png';
import { productImage, productImage1 } from '../../utils/constants';
import { Consideration, Testimonials } from '../MUI_WEB';
import { CartComponent } from '../MUI_WEB';




const Cart = () => {
  return (
    <Box sx={{pt:'40px'}}>
      <Container sx={{pb:'40px'}}>
        <Typography sx={{fontSize:'20px', fontWeight:600, pb:'20px'}} >Shipping Details</Typography>

        <Box sx={{display:'flex', mt:'30px',justifyContent:'space-between'}}>
          <Box className='shipping_form' sx={{ml:'30px'}}>
          <Grid spacing={1} >
             
             <Box sx={{display:'flex', gap:'30px'}}>
             <Grid xs={12} sm={6} item>
               <TextField label="FirstName" placeholder='Enter FirstName' />
             </Grid>

             <Grid xs={12} sm={6} item>
               <TextField label="LastName"  placeholder='Enter LastName' />
             </Grid>
             </Box>
             

             <Grid item>
               <TextField type="email" label="Email"  placeholder='Enter Email' sx={{width:'420px', mt:'20px'}}/>
             </Grid>


             <Box sx={{display:'flex', gap:'30px', mt:'20px'}}>
             <Grid xs={12} sm={6} item>
               <TextField label="Country" placeholder='Country' />
             </Grid>

             <Grid xs={12} sm={6} item>
               <TextField label="City"  placeholder='City' />
             </Grid>
             </Box>

             <Grid item>
               <TextField label="Address"  placeholder='Enter Address' sx={{width:'420px', mt:'20px'}}/>
             </Grid>

             <Grid item>
               <TextField type="number" label="Phone"  placeholder='Phone number' sx={{width:'420px', mt:'20px'}}/>
             </Grid>

             <Grid item>
               <TextField  type="number" label="Zip code"  placeholder='Zip Code' sx={{width:'420px', mt:'20px'}}/>
             </Grid>


             </Grid>

             <Box className='button_images'>
              <Box  className='buttons__wrapper' sx={{display:'flex', justifyContent:'space-between', pt:'30px'}}>
                <Box className='back__button' sx={{display:'flex'}}>
                  <img src={nextIcon} alt="" className="back__button__image" />
                  <Link><Typography sx={{pt:'15px',pl:'8px', fontSize:'18px', fontWeight:400}}>Back </Typography></Link>
                </Box>

                 <Button variant='contained' sx={{background:'#F05AB4', textTransform:'capitalize', mr:'10px', fontSize:'17px'}}>Continue</Button>
              </Box>
               
             </Box>
        </Box>

          <CartComponent/>
        </Box>

        </Container> 
        <Consideration/>
        <Testimonials/>
    </Box>
  )
}

export default Cart