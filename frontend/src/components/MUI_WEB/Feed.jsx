import React from 'react'
import { Box, Typography } from '@mui/material';


const Feed = ({selectedCategory}) => {
 
  return (
    <Box className='right__section' sx={{flex:'0.8'}}>
    <Typography sx={{ml:'10px', fontWeight:600, fontSize:'25px'}}>{selectedCategory}</Typography>
       
    <Box>
   
    </Box>
    </Box>
  )
}

export default Feed