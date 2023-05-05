import Header from "./components/header/Header";
import "./App.css";


import { Box } from "@mui/material";
import Home from "./components/home/Home";


function App() {
  return (
    <>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
