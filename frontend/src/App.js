import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetails, VideoDetails, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
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
);

export default App;