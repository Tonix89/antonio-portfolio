import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import ProjectPage from "./components/Pages/Projects";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{backgroundColor: "primary.main", height: "100vh"}}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </Box>
  );
}

export default App;
