import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";
import PetAdoptionApp from "./pages/PetAdoptionApp";

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative">
      {location.pathname === '/' && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Adopt />
            <Contact />
          </>
        } />
        <Route path="/pets" element={<PetAdoptionApp />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;