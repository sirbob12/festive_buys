import React from 'react';
import {Stack, Box, Typography, Container} from '@mui/material';
import hero__logo from '../../asset/hero__logo.png';

const Hero = () => {
  return (
    <Stack sx={{background:'#000', height:'100vh'}}>
    <Container   sx={{display: {md:'flex', sm:'block'}, mt:'50px'}}>
    <Box sx={{textAlign:'center', fontWeight:'bold', fontSize:'45px', color:'yellow'}}>
      <Typography variant='h2'>

        This is the landing page of this web 
        <span style={{fontWeight:'bold', color:'#fff'}}>application</span>
      </Typography>
    </Box>

    <Box >
      <img src={hero__logo} alt="hero_image" className="hero__image" height='350px'/>
    </Box>
    </Container>
    </Stack>
  )
}

export default Hero