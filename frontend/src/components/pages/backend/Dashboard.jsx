import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

//import actions from form the countSlice



const Dashboard = () => {



  return (
    <Box sx={{}}>
      <Typography>Welcome</Typography>
      <Typography sx={{fontSize:'25px', fontWeight:'bold'}}>Mr Smith,</Typography>
 
        <Box sx={{display:'flex', gap:'15px'}}>
          <Button >Increase</Button>
          <Typography sx={{fontSize:'25px',fontWeight:'bold'}}>count</Typography>
          <Button >Decrease</Button>
        </Box>


    </Box>
  )
}

export default Dashboard