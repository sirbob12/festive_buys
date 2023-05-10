import React, { useState, useEffect} from 'react'
import { Box, Typography, Button, Paper} from '@mui/material';
import { SideNav, Feed } from '../../MUI_WEB';


const Admin = () => {
   return (
     <Box sx={{display:'flex'}}>
        <SideNav/>
        <Feed/>
     </Box>
  )
}

export default Admin