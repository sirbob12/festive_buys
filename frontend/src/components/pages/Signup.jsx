import React from 'react'
import { Box, Typography, Button, Grid, TextField, Container } from '@mui/material'

const Signup = () => {
  return (
    <Box>
      <Container>
        <Box sx={{pt:'120px',pb:'60px'}}>
        <Typography sx={{fontSize:'20px'}}>Sign Up</Typography>

        <Box className='formClass_group'>
        <Grid item>
               <TextField type="name" label="name"  placeholder='Enter name' sx={{width:'420px', mt:'20px'}}/>
             </Grid>
        <Grid item>
        <TextField type="email" label="Email"  placeholder='Enter Email' sx={{width:'420px', mt:'20px'}}/>
        </Grid>

        

        <Button
         sx={{display:'inline-block',
          background:'#fff', border:'2px solid ', mt:'10px', textTransform:'capitalize',
          "&:hover":{background:'#17104F', border:'none', color:'#fff'}}}>
            Sign Up
            </Button>

            
        
        </Box>
        </Box>
        

      </Container>
    </Box>
  )
}

export default Signup