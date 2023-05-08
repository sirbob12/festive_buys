import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { categories } from '../../utils/sideComponents';

const Sidebar = ({selectedCategory, setSelectedCategory}) => {



  return (
    
          <Box className='left__section' sx={{flex:'0.2', background:'#382C67'}}>
           {categories.map((category)=>(
              <Button className='category-btn'
               key={category.name} sx={{display:'flex', gap:'20px', pl:'34px',pt:'20px', ":hover": {cursor:'pointer', background:'#F05AB4'}}}
               style={{background: category.name === selectedCategory && '#F05AB4'}}
                onClick={()=>setSelectedCategory(category.name)}
               >
                 <Box sx={{color:'#fff'}}>{category.icon}</Box>
                <Typography sx={{color:'#fff'}}>{category.name}</Typography> 
                
               

              </Button>
           ))}
            </Box>

  )
}

export default Sidebar