import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from '@mui/material';
import { Mynavbar, Footer, Form, Hero  } from "./components/MUI_TEST";

import { ChannelDetails, VideoDetails, SearchFeed, Navbar, Feed } from './components';

const App = () => (

  /*<BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path = '/channel/:id' element={<ChannelDetails/>}/>
        <Route path = '/Video/:id' element={<VideoDetails/>}/>
        <Route path = '/Search/:SeachTerm' element={<SearchFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
  */


  //creating the new components to explore the features of material ui
  
<Box >
 
  <Mynavbar/>
  <Form/>
 
</Box>

);

export default App;