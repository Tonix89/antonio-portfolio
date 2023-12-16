import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import ProjectPage from "./components/Pages/Projects";
import Layout from "./components/Layout/Layout";
import AboutMePage from "./components/Pages/About";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/about" element={<AboutMePage />} />
          </Route>
        </Routes>
    </Box>
  );
}

export default App;
