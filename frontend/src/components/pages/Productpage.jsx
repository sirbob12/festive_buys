import React from 'react'
import { Box, Typography, Button, Card, Container} from '@mui/material'
import { productImage } from '../../utils/constants'
import { fontSize } from '@mui/system'


const Productpage = () => {
  return (
    
    <Box>
      <Container>
      <Box className='top__section'  sx={{display:'flex', gap:'150px', justifyContent:'space-between', pt:'50px'}}>
        <Box sx={{ml:'150px', mt:'100px'}}>
          <img src={productImage} alt="product__image" style={{}} />
        </Box>

        <Box className='Product__card'>
          <Card  sx={{width:'400px', height:'auto', pt:'60px', pb:'40px', px:'30px'}}>
            <Typography sx={{fontSize:'30px', fontWeight:600, lineHeight:'51px'}}>Microsoft Controller for Series X, Series S, Xbox One (Latest Model) - Pulse Red (Renewed)</Typography>
            <Typography sx={{fontSize:'45px', color:'#382C67'}}>Now $139 </Typography>
            <Typography sx={{fontSize:'13px', color:'rgba(0,0,0,0.5)'}}>Prices may vary online, in stores and in app </Typography>
           
           <Button  variant='contained'
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
            <Typography>Introducing Nursery Pal Premium.
               This smart, HD video baby monitor includes a 5” color
                touch screen and an impressive 1000 ft. range. Monitor 
                from it or your compatible smart device using Wi-Fi. Pan,
                 tilt, and zoom to maintain the perfect view.
            </Typography>
          </Card>

        </Box>


      </Box>
      </Container>


    </Box>
  )
}

export default Productpage