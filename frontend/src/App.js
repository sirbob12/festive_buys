import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack,Container, Typography } from '@mui/material';
import { Mynavbar, Footer, Form, Hero  } from "./components/MUI_TEST";

import { ChannelDetails, VideoDetails, SearchFeed, Navbar, Feed } from './components';

const App = ()=>{

  const categories = [
    {name:'bobby', car:'bentely'},
    {name:'smith', car:'Ferari'},
    {name:'Cardone', car:'lamboghini'}
  ]
  return(
    <Box>
      <Container>
           {categories.map((category)=>(
            <Typography variant='h4' key={category.name}>{category.name} || {category.car}</Typography>
           ))}
      </Container>
    </Box>
  )
}

export default App;