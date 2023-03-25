import React from 'react'
import {Box, Stack, Typography, Button, Paper} from  '@mui/material'
import { productData } from '../../utils/constants';
import { Link } from 'react-router-dom';




const Sales2 = () => {
  return (
    <Box sx={{mt:'200px', background:'#382C67', height:'auto', pb:'60px'}}>
      
      <Typography variant='h1' sx={{fontSize:'25px', fontWeight:700, color:'#fff', ml:'90px', pt:'30px', pb:'30px'}}>
        Easter Gifts
        </Typography>

        <Box sx={{display:'flex', gap:'20px', ml:'40px', }}>

          {productData.map((products)=>(

            <Link to='/productpage/:1'>
            <Paper key={products.id}  SX={{borderRadius:0, height:'250px', width:'auto', pl:'10px'}}>
               <img src={products.img} alt="products_image" style={{height:'210px', width:'300px', objectFit:'contain'}}/>
               <Typography sx={{pl:'10px'}}>{products.name}</Typography>
               <Typography variant='h6' sx={{fontSize:'25px', fontWeight:700, pl:'10px'}}>{products.price}</Typography>
            </Paper>
            </Link>
          ))}
           
        </Box>
      
    </Box>
  )
}

export default Sales2