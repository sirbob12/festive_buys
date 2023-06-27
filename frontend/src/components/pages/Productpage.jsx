import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Card, Container } from '@mui/material'
import { productData, productImage } from '../../utils/constants'
import { fontSize } from '@mui/system';
import { Testimonials } from '../MUI_WEB';
import { Consideration } from '../MUI_WEB';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../../store/productsSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../../store/shoppingCart';



const Productpage = () => {


  const navigate = useNavigate();
  const [quantity, setQty] = useState(1);

  //const { data: product } = useSelector(state => state.shoppingCart);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (singleProduct) => {
    let totalPrice = quantity * singleProduct.price;
    const tempProduct = {
      ...singleProduct,
      quantity: quantity,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    //dispatch(setIsModalVisible(false));
   // navigate('/cart');
  };

  const {id} = useParams();
  const dispatch = useDispatch();
   
  const { singleProduct, loading, error } = useSelector((state)=>state.product)
  

  useEffect(()=>{
     dispatch(fetchSingleProduct(id))
  }, [dispatch,id]);

console.log(singleProduct)
 
if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

if (!singleProduct || singleProduct.length === 0) {
  return <div>Cart is empty.</div>;
}


  return (
    
    <Box>
      <Container>
       <Typography></Typography>
      <Box className='top__section'  sx={{display:'flex', gap:'150px', justifyContent:'space-between', pt:'50px'}}>
        <Box sx={{ml:'150px', mt:'100px'}}>
          <img src={singleProduct.image} alt="product__image" style={{}} />
        </Box>

        <Box className='Product__card'>
          <Card  sx={{width:'400px', height:'auto', pt:'60px', pb:'40px', px:'30px'}}>
            <Typography sx={{fontSize:'30px', fontWeight:600, lineHeight:'51px'}}>{singleProduct.title}</Typography>
            <Typography sx={{fontSize:'45px', color:'#382C67'}}>Now ${singleProduct.price} </Typography>
            <Typography sx={{fontSize:'13px', color:'rgba(0,0,0,0.5)'}}>Prices may vary online, in stores and in app </Typography>
           
           <Button  variant='contained'
            onClick={()=>addToCartHandler(singleProduct)}
           sx={{
             
              borderRadius:'30px',
              width:'200px',
              height:'52px', 
              background:'#F05AB4',
              textTransform:'capitalize',
              fontSize:'20px',
              fontWeight:500,
              mt:'15px',
              mb:'10px'



           }}>
            Add To Cart
            </Button>
            <hr className='line__design__class'/>

            <Typography sx={{fontSize:'25px', fontWeight:600, py:'10px' }}>Product Details</Typography>
            <Typography>{singleProduct.description}
            </Typography>
          </Card>

        </Box>


      </Box>
      </Container>

      <Consideration/>
      <Testimonials/>
    </Box>
  )
}

export default Productpage