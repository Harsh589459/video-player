import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { ChannelDetail } from './components'
import { SearchFeed } from './components'
import { VideoDetail } from "./components";
import { Feed } from "./components";
import { Navbar } from "./components";
import Heading from "./components/Heading";

const App = () => (
  <BrowserRouter>
    <Heading />
    <Box sx={{ backgroundColor: '#7eca89' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
