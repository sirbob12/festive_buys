import React from 'react'
import { Box, Typography, Card, Button } from '@mui/material'  
import {  HeroSection, Footer, Sales1, Sales2, Navbar, Testimonials } from '../MUI_WEB'

const Home = () => {
  return (
    <Box>
        <HeroSection/>
        <Sales1/>
        <Sales2/>
        <Testimonials/>
   
    </Box>
  )
}

export default Home