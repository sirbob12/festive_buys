import React from 'react'
import { Box, Stack, Typography, Card, Paper } from '@mui/material';
import { productsTestimonial } from '../../utils/constants';



const Testimonials = () => {
  return (
    <Box  sx={{pb:'90px', pt:'20px'}}>
      <Typography variant='h6' sx={{fontWeight:600, textAlign:'center', fontSize:'30px', py:'30px'}}>What our customers are saying.</Typography>
    <Box  sx={{display:{xs:'block',md:'flex'}, gap:'40px', alignItems:'center',ml:'200px',mt:'30px'}}>
      {productsTestimonial.map((testimony)=>(
        <Card sx={{height:'auto', width:'300px', pt:'50px'}}>
          <img src={testimony.img} alt="testimony_image" className='testimony_image' style={{}}/>
          <Typography variant ='body2' sx={{color:'#382C67', fontStyle:'italic', textAlign:'center',px:'20px', py:'20px'}}>{testimony.testimony}</Typography>
          <Typography variant ='body1' sx={{color:'#382C67', fontWweight:600,  fontStyle:'italic', textAlign:'right', pr:'10px',pb:'10px'}}>{testimony.name}</Typography>
        </Card>
      ))}
    </Box>  
    </Box>
  )
}

export default Testimonials