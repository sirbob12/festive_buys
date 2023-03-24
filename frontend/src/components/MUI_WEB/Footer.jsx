import React from 'react'
import {Box, Stack, Typography, Card} from '@mui/material';
import  Subscribe from './Subscribe';
import logo2 from '../../festive_assets/logo2.png';
import  social1 from '../../festive_assets/social1.png';
import  social2 from '../../festive_assets/social2.png';
import  social3 from '../../festive_assets/social3.png';




const Footer = () => {
  return (
    <Box sx={{height:'auto', background:'#382C67', pl:'40px', pt:'30px', pb:'50px'}}>
      <Box  sx={{display:'flex', gap:'150px'}}>
      
      <Box className='left_section'>
         <img src={logo2} alt="" className="logo2_image" />

         <Box sx={{mt:'10px'}}>
         
         <Typography sx={{fontSize:'25px', fontWeight:'600', color:'#fff'}}>
          Sign up for our Newsletter
          </Typography>
         
         <Typography  variant='body1'  sx={{color:'#fff', opacity:'55%', lineHeight:'18px'}}>
          Sign up for our newsletter and get updates on new <br/>products and discounts
          </Typography>

          </Box>
       
        <Subscribe/>
      </Box>

      <Box className='right_section' sx={{mt:'20px'}}>
         
         <Box className='footer__links'  sx={{display:'flex', color:'#fff', gap:'60px'}}>
          <Box sx={{}}>
           <Typography  sx={{fontSize:'20px', fontWeight:400, }}>Terms Of Service </Typography>
           <Typography   sx={{fontSize:'20px', fontWeight:400, }}>Privacy  policy </Typography>
           <Typography   sx={{fontSize:'20px', fontWeight:400, }}>Refund  policy </Typography>
           <Typography    sx={{fontSize:'20px', fontWeight:400, }}>Shipping  policy </Typography>
          
          </Box>

          <Box sx={{}}>
            <Typography  sx={{fontSize:'20px', fontWeight:400, }}>About us</Typography>
            <Typography  sx={{fontSize:'20px', fontWeight:400, }}>Contact</Typography>
            <Typography  sx={{fontSize:'20px', fontWeight:400, }}>Blog</Typography>
          </Box>
         </Box>

         <Box className='social_icons'  sx={{display:'flex',ml:'400px',mt:'50px', height:'30px', gap:'20px'}}>
            <img src={social1} alt="" className="social1"  style={{height:'30px', px:'10px'}}/>
            <img src={social2} alt="" className="social1" style={{height:'30px', px:'10px'}}/>
            <img src={social3} alt="" className="social1" style={{height:'30px', px:'10px'}} />
         </Box>
         
        </Box>
      </Box>

    </Box>
  )
}

export default Footer