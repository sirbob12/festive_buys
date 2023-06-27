import React, { useEffect} from 'react';
import { Box, Stack, Button, Card, Typography } from '@mui/material';
import nextIcon from '../../festive_assets/nextIcon.png';
import { productImage, productImage1 } from '../../utils/constants';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import  { removeFromCart, clearCart } from '../../store/shoppingCart';
import { getAllCarts, getCartTotal, getCartItemsCount, getCartItemsAmount } from '../../store/shoppingCart';

const CartComponent = () => {
  
  const carts = useSelector(getAllCarts);
  const totalItems = useSelector(getCartItemsCount);
  const totalAmount = useSelector(getCartItemsAmount);

  
  console.log(totalAmount)
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getCartTotal())
}, [carts])
 
 if(totalItems === 0){
    return <p>cart is empty</p>
  }



  return (
    <Box className='Shopping__cart'>
          <Typography sx={{fontWeight:600}}>Your order</Typography>
       { carts.map((item)=>(
          
          <Card sx={{height:'auto', width:'400px',pt:'30px',pb:'40px',px:'20px', mr:'30px'}}>
          
          
    
          <Box className='cart__images' sx={{display:'flex', gap:'20px',py:'10px'}}>
            <img src={item.image} alt="nextIcon__image" className='nextIcon__image' />
            <Box className='item__amount'>
              <Typography>{item.title}</Typography> 
              <Typography>${item.price}</Typography> 
              <Typography></Typography> 
    
            </Box>
          </Box>
    
          <hr className='line__style'/>
    
       
            
    
        </Card>
       ))}

          <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'20px', fontWeight:600, pl:'50px', pt:'10px',color:'#382C67'}}>
           Total: ${totalAmount}
           </Typography>

           <Typography sx={{fontSize:'20px', fontWeight:600, pl:'50px', pt:'10px',color:'#382C67'}}>
           Total Items: {totalItems}
           </Typography>
           </Box>

 </Box>
  )
}

export default CartComponent