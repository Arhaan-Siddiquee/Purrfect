// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home /><div>
      <Navbar />
      </div>
      <div className="mt-16">
        {/* About Section */}
        <section id="about" className="h-screen bg-site p-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            Welcome to our website! We are dedicated to helping animals find loving homes.
          </p>
        </section>

        {/* Adopt Section */}
        <section id="adopt" className="h-screen bg-gray-200 p-10">
          <h2 className="text-3xl font-bold mb-4">Adopt</h2>
          <p className="text-gray-700">
            Find your new furry friend! Browse our selection of animals looking for homes.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen bg-gray-300 p-10">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Get in touch with us for more information or to schedule a visit.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
