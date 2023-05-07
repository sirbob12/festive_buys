import React, { useState, useEffect} from 'react'
import { Box, Typography, Button, Paper} from '@mui/material';
import { Sidebar, Feed } from '../../MUI_WEB';


const Dashboard = () => {

    const [selectedCategory, setselectedCategory] = useState('History')





   return (
    <Box sx={{display:'flex' }}>
      
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
        {console.log(selectedCategory)}
        <Feed/>
       


    </Box>
  )
}

export default Dashboard