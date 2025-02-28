"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Iconpage from "./pages/icons";
import Footerpage from "./pages/footer";
import Headerpage from "./pages/header"; 
import Docs from "./pages/docs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-200">
        {/* Header remains visible on all pages */}
        <Headerpage />

        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/icons" element={<Iconpage />} />
          <Route path="/docs" element={<Docs />} />
          {/* Add more routes here for components, docs, etc. */}
        </Routes>

        {/* Footer remains visible on all pages */}
        <Footerpage />
      </div>
    </Router>
  );
}

export default App;
