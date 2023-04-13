import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Recommend } from "@mui/icons-material";
import Detailvideo from "./pages/Detailvideo";
const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="detail/:id" element={<Detailvideo />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
