import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import ProjectPage from "./components/Pages/Projects";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </div>
  );
}

export default App;
