import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import hero from '../../festive_assets/hero.png'

function Hero() {
  return (
     <Box  className='image' sx={{height:'100vh', width:'100%', backgroundImage:`url(${hero})`}}>
       <Box className='overlay' sx={{ height:'100vh', width:'100%', backgroundColor:'#000', opacity:'70%'}}>

       </Box>
     </Box>
  )
}

export default Hero