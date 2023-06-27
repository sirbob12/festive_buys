import React, { useState, useEffect } from 'react';
import {Box, Stack, Typography, Container, Button, AppBar, Badge} from '@mui/material';
import {MailIcon} from '@mui/icons-material'
import {theme} from '../../theme';
import logo1 from '../../festive_assets/logo1.png';
import dashicons_menu from  '../../festive_assets/dashicons_menu.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import shoppingCart from '../../festive_assets/shoppingCart.png'
import { Link } from 'react-router-dom'
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/shoppingCart';
import { useSelector, useDispatch } from 'react-redux';




const Navbar = () => {

  const cart = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount)
  const dispatch = useDispatch();

  console.log(itemsCount)
 
  useEffect(()=>{
     dispatch(getCartTotal())
  }, [cart])



  return (
   <Stack  direction='row' sx={{background:'#fff', height:'auto'}}>
      <Container  sx={{display:'flex', justifyContent:'space-between'}}>

        <Link to='/'>
        <Box sx={{mt:'25px',mb:'10px'}}>
        <img src={logo1} alt="logo1" className="logo1" height={50}/>
        </Box>
        </Link>

        <Box sx={{display:{xs:'none', md:'flex'}, gap:'40px', mt:'37px', ml:'-40px'}}>            
          <Typography component='a' sx={{fontSize:'18px', fontWeight:600}}>Latest Gifts</Typography>
           <Typography component='a'   sx={{fontSize:'18px', fontWeight:600}}>Thanksgiving</Typography>
           <Typography component='a'   sx={{fontSize:'18px', fontWeight:600}}>Valentine</Typography>
        </Box>

         <Link to='/cart'>
         <Box  sx={{ml:'50px'}}>   
        <Badge color="secondary" badgeContent={itemsCount} sx={{mb:'25x', mt:'30px', ml:{xs:'35px', md:'70px'}}}>
          <img src={shoppingCart} alt="cart_png" className="cart_png"  style={{height:38}} />
        </Badge>
        </Box>
        </Link>  

        <Link to='/signup'>
        <Button variant='contained' size='small' color='secondary'
         sx={{py:'10px', mt:'29px',mb:'27px', textTransform:'capitalize'
         , height:'39px', width:'120px', display:{xs:'none', md:'flex'} }}>
          Sign Up
        </Button>
        </Link>

        <Box sx={{display:{xs:'flex', md:'none'}, mt:'25px'}}>
        <img src={dashicons_menu} alt="" className="menuIcons" style={{height:'50px'}}/>

        </Box>
       
      </Container>
   </Stack>
  )              
}

export default Navbar