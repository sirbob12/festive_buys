import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack,Container, Typography } from '@mui/material';
import {Navbar, Sales1, Sales2, Footer, Testimonials, HeroSection} from './components/MUI_WEB';
import {theme} from './theme'
import Navigation from './components/MUI_WEB/Navigation';



const App = ()=>{
 
  return(
    
  <Stack direction='column'>
  
    <Navigation/>
  </Stack>
     
  )
}

export default App;