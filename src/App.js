import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/navbar/Navbar';
import Detailvideo from './pages/Detailvideo';
import { Suspense } from 'react';
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/:id" element={<Detailvideo />} />
          </Routes>
        </Box>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
