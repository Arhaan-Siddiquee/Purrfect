// Adopt.jsx
import React from "react";
import logo from "../logo/adoptbanner.svg"

const Adopt = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="flex flex-wrap justify-center items-center gap-12 p-4">
        
        {/* Left Column Boxes */}
        <div className="flex flex-col space-y-12">
          <div className="w-64 h-64 border-4 border-red rounded-md"></div>
          <div className="w-64 h-64 border-4 border-red rounded-md"></div>
        </div>

        {/* Center Box - Visible only on medium and larger screens */}
        <div className="w-75 h-75 border border-red hidden md:block">
          <img src={logo} alt="banner" />
        </div>

        {/* Right Column Boxes */}
        <div className="flex flex-col space-y-12">
          <div className="w-64 h-64 border-4 border-red rounded-md"></div>
          <div className="w-64 h-64 border-4 border-red rounded-md"></div>
        </div>

      </div>
    </div>
  );
};

export default Adopt;
