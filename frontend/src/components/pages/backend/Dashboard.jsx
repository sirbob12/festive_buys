import React, { useState, useEffect} from 'react'
import { Box, Typography, Button, Paper} from '@mui/material';
import { Sidebar, Feed } from '../../MUI_WEB';


const Dashboard = () => {

    const [selectedCategory, setselectedCategory] = useState(null)






   return (
    <Box sx={{display:'flex' }}>
      
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
      
        <Feed selectedCategory = {selectedCategory}/>
       


    </Box>
  )
}

export default Dashboard