import react, {useState, useEffect} from 'react';

import {Box,Stack, Typography, Menu, MenuItem, Paper,Styled, Button, createTheme} from '@mui/material';

const Footer =()=>{





  

  

  return(
    <Box py='20px'>
      <Paper sx={{ borderRadius:'25px', width:'500px',height:'400px', justifyContent:'center', textAlign:'center',ml:'450px' }}
       
      >
        <Box>
          <Typography variant ='body2'> Hello,</Typography>
          <Typography variant='h4'> Bobby ...Welcome</Typography>
          <Typography variant= 'h3' sx ={{fontFamily:'monospace'}}> Main Balance:<span style={{fontWeight:'bolder', fontStyle:'italic'}}>$500</span></Typography>
          <Button variant ='outlined'>Deposit</Button>
          <Button variant ='outlined'>Withdraw</Button>
        </Box>
      </Paper>

    </Box>
  )
}

export default Footer;
