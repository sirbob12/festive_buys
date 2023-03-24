import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Search} from '@mui/icons-material';

import {Paper, IconButton, Box} from '@mui/material';

const SearchBar = () => {
  return (

    <Paper  
      component = "form"
      onsubmt = {()=>{}}
      sx={{ 

        borderRadius:20,
        height: 25,
        border: '1px solid #e3e3e3',
        pl: 2,
        pb:0.8,
        boxShadow: 'none',
        mt:1,
        mr: {sm :5}

     }}
    >
        <Box sx ={{
            mt:-0.8
        }}>

        <input
          className="search-bar"
          placeholder = "Search..."
          onChange = {()=>{}}
          sx={{outline:'none'}}
         />

         <IconButton type="submit" sx={{ p: '10px', color:'red'}}>
            <Search/>
         </IconButton>

         </Box>

    </Paper>
  )
}

export default SearchBar



