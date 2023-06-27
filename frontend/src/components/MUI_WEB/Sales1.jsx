import React, { useEffect } from 'react'
import {Box, Stack, Typography, Button, Card, Paper} from '@mui/material';
import {cardData, valData} from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { Link } from 'react-router-dom';



const Sales1 = () => {

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.product.products);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);


  return (
    <Box>
      <Card
      sx={{width:'1200px', height:'400px', borderRadius:'14px', position:'absolute', top:'550px', left:'100px'}}
      >
         
         <Typography sx={{fontSize:'25px', fontWeight:700, pt:'35px',pl:'100px',pb:'10px'}}> Trending Gifts</Typography>

        <Box sx={{display:'flex', gap:'20px', ml:'40px'}}>
           {products.slice(0,5).map((product)=>(

          
            <Paper elevation={0} sx={{height:'500px',width:'350px',background:'#f5f3ed',pb:'',mb:'20px'}} key={product._id} > 
                
                <img src={product.image} alt="image" className="image"  style={{height:'210px', width:'200px', objectFit:'cover'}} />
                <Typography>{product.title}</Typography>
                <Typography variant='h6' sx={{fontWeight:700}}>${product.price}</Typography>
                <Link to={`products/${product._id}`}><Button>View</Button></Link>
                  
            </Paper>
          
           ))}
        </Box>  
      </Card>
    </Box>
  )
}

export default Sales1