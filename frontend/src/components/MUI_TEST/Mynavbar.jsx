import {React, useState} from 'react'
import {Stack, Box, Typography, Container, Button, IconButton, MenuList, MenuItem, Paper} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import netflix from '../../asset/netflix.png';
import {Link} from 'react-router-dom'



const Mynavbar = () => {

  const [toggle, setToggle] = useState(false);



  const clickers = () =>{
    alert('we just they try new things')
  }

  const navbarList = [
    'Romance', 'Commedy', 'Sci-Fi', 'Actions'
  ]


  return (
    <Stack direction='row' sx={{background:'#000', position: 'sticky', top:0}}>
      <Container sx={{display: 'flex', justifyContent:'space-between' }}>
        
       <a href="#"> <img src={netflix} alt="header_logo" className="navbar_logo"  style={{ height:'100px', py:'20px'}}/></a>
        

        <Box  sx={{ mr:'20px', display:{xs:'none',md:'flex'}, mr:'10px',mt:'40px', gap:'50px'}}>
         

           {navbarList.map(list=>(
                 <Typography variant='body1' key={list.id} sx={{color:'#fff', }}>
                    {list}
                 </Typography>
           ))}
        </Box>

        <Box>
          <Button 
           variant= 'contained'
          
            onClick={()=> clickers()}
            sx={{display:{xs:'none', md:'inline'}, mt:'25px', mr:'25px', background:'green', fontWeight:'100', "&:hover":{background:'black'}}}
            
            >

            Sign Up

          </Button>
        </Box>

        <IconButton  onClick={e=> setToggle(true)} sx={{ display: {xs:'inline', md:'none'}, color:'white'}}>
          <MenuIcon fontSize= 'large' onClick={e=>setToggle(true)}/>
        </IconButton>

      <Paper 
         elevation={2}
         variant='outlined' square
         sx={{bgcolor:'#fff',borderRadius:'10px', position:'absolute', top:'70px', right:'10px'}}
      >
        <MenuList  toggle={true} onClose ={e=>setToggle(false)}  sx={{display:{xs:'none'}}}>
         {navbarList.map((list)=>(
          <MenuItem>{list}</MenuItem>
         ))}
        </MenuList>
      </Paper>
        
      </Container>        
      
      
     
    </Stack>
  )
}

export default Mynavbar

