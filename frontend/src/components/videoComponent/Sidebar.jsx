import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import {categories} from '../../utils/constants'

const Sidebar = () => {

const selectedCategory = 'NEW'

  return (
    <Stack
      direction="row"
      sx={{
        overflowY:'auto',
        height:{sx:'auto', md:'95%'},
        flexDirection: {md: 'column'}

      }}
    >
     
     {categories.map((category)=>(
        <button className='category-btn'
           style ={{
             background: category.name === selectedCategory && '#FC1503',
             color: 'white',
             overflowY:'none'
           }}
           key={category.name}
        >
            <span>{category.icon}</span>
            <span>{category.name}</span>
        </button>
     ))}
    </Stack>
  )
}

export default Sidebar