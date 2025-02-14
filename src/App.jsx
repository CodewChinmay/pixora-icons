"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Iconpage from "./pages/icons";
import Footerpage from "./pages/footer";
import Headerpage from "./pages/header"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
        {/* Header remains visible on all pages */}
        <Headerpage />

        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/icons" element={<Iconpage />} />
          {/* Add more routes here for components, docs, etc. */}
        </Routes>

        {/* Footer remains visible on all pages */}
        <Footerpage />
      </div>
    </Router>
  );
}

export default App;
