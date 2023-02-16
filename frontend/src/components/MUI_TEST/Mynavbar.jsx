import {React, useState} from 'react';
import {Stack, Box, Typography, Container, Button, Menu , IconButton, MenuList, MenuItem, Paper} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import netflix from '../../asset/netflix.png';
import {Link} from 'react-router-dom';



const Mynavbar = () => {

 
  const [open, setOpen] = useState(false)

  const navbarList = [
    'Romance', 'Commedy', 'Sci-Fi', 'Actions'
  ]


  return (
    <Stack direction='row' sx={{background:'#000', position: 'sticky', top:0}}>
      <Container sx={{display: 'flex', justifyContent:'space-between' }}>
        
       <a href="#"> <img src={netflix} alt="header_logo" className="navbar_logo"  style={{ height:'100px', py:'20px'}}/></a>
        

        <Box  sx={{ mr:'20px', display:{xs:'none',md:'flex'}, mr:'10px',mt:'40px', gap:'50px'}}>
         

           {navbarList.map(list=>(
                 <Typography variant='body1' component="a" key={list} sx={{color:'#fff', }}>
                    {list}
                 </Typography>
           ))}
        </Box>

        <Box>
          <Button 
           variant= 'contained'
          
            //onClick={()=>{setToggle(true)}}
            sx={{display:{xs:'none', md:'inline'}, mt:'25px', mr:'25px', background:'green', fontWeight:'100', "&:hover":{background:'black'}}}
            
            >

            Sign Up

          </Button>
        </Box>

        <IconButton onClick={e=>setOpen(true)} sx={{ display: {xs:'inline', md:'none'}, color:'white'}} >
          <MenuIcon fontSize= 'large'/>
        </IconButton>

          
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        
        open={open}
        onClose={e=>setOpen(false)}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          background:'blue'
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

     
              
      </Container>        
      
      
     
    </Stack>
  )
}

export default Mynavbar

