import React from 'react'
import {Box, Stack, Typography, Button, Card, Paper} from '@mui/material';
import {cardData, valData} from '../../utils/constants'

const Sales1 = () => {
  return (
    <Box>
      <Card
      sx={{width:'1200px', height:'400px', borderRadius:'14px', position:'absolute', top:'550px', left:'100px'}}
      >
         
         <Typography sx={{fontSize:'25px', fontWeight:700, pt:'35px',pl:'100px',pb:'10px'}}> Trending Gifts</Typography>

        <Box sx={{display:'flex', gap:'20px', ml:'40px'}}>
           {valData.map((list)=>(
            
            <Paper  sx={{height:'auto',width:'auto'}} key={list.img}> 
                
                <img src={list.img} alt="image" className="image"  style={{height:'210px', width:'200px', objectFit:'cover'}} />
                <Typography>{list.name}</Typography>
                <Typography variant='h6' sx={{fontWeight:700}}>{list.price}</Typography>
                  
            </Paper>
           ))}
        </Box>  
      </Card>
    </Box>
  )
}

export default Sales1