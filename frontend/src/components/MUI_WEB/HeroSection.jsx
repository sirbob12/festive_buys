import React from 'react'
import {Box, Stack, Typography, Button, Styled} from '@mui/material';
import hero from '../../festive_assets/hero.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-router-dom';

const HeroSection = () => {


  return (
    
    <Box >
    
    <img src={hero} alt="hero" className="myimage"  style={{height:{xs:'100px', md:'100vh'}, width:'100%'}}/>
  
    <Box sx={{height:'689.5px', width:'100%', background:'#000', opacity:'69%',position:'absolute', top:96}}>
    </Box>

  <Box sx={{left:'120px', position:'absolute', top:200}}>
    <Typography color='#fff' sx={{fontSize:'40px',fontweight:600}}> Put a smile on the face</Typography>
    <Typography color='#fff' sx={{fontSize:'40px',fontweight:600, mt:'-18px'}}> of your loved ones</Typography>
    <Typography color='#fff' sx={{fontSize:'40px',fontweight:600, mt:'-16px'}}> this EASTER</Typography>
    <Typography color='#fff' sx={{fontSize:'40px',fontweight:600,mt:'-18px'}}> for as low as</Typography>
    <Typography color='#fff' sx={{fontSize:'160px',fontweight:600 , position:'absolute', top:30, left:340}}> $2</Typography>
    
    
    <Button   variant = 'contained' color='secondary'  size='large' endIcon={<ArrowForwardIcon  size='large'/>}
       sx={{textTransform:'capitalize', mt:'40px', height:'60px', width:'350px', borderRadius:'7px', fontSize:'25px'}}>
         Shop Now
         </Button>
     </Box>

 
    
  </Box>
 
  )
}

export default HeroSection