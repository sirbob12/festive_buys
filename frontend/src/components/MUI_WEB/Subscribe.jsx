import React from 'react'
import {Box, Input, Button, Typography, Paper} from '@mui/material'

const Subscribe = () => {
  return (
    <Box  sx={{mt:'25px'}}>
       <Paper sx={{display:'flex', height:'50px', width:'500px', borderRadius:'7px',gap:'30px'}}>
        <Button  variant='contained'
         sx={{
          background:'#F05AB4',
           ml:'2.4px',mt:'2px', 
           height:'45px',
           width:'auto',
            borderRadius:'7px',
            textTransform:'capitalize',
            fontSize:'20px',
            fontWeight:400
            }}>

          Subscribe
          </Button>
          
          <input 
          type="text"
          placeholder='Enter your Email'
          className="form_class"
          />
      
       </Paper>
    </Box>
  )
}

export default Subscribe