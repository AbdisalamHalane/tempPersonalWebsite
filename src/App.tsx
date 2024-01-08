import React from 'react';
import { BrowserRouter as Router, Routes, Route , useParams} from 'react-router-dom';
import TopSec from "./TopSec"; 
import Home from './home';
import ProjectPage from './ProjectsPage';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:currentProject" element={<ProjectPage />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//<TopSec/><Projects /><Navbar />