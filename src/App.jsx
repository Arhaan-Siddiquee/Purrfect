// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-site relative">
      <Navbar />
      <Home />
      <About />
      <Adopt />
      <Contact />
    </div>
  );
}

export default App;
