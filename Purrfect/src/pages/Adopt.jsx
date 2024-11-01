import React from "react";
import logo from "../logo/adoptbanner.svg";

const Adopt = () => {
  return (
    <div className="p-10 flex justify-center items-center relative">
      {/* Main Image */}
      <img src={logo} alt="banner" className="w-1/2 m-0 h-auto rounded-lg" />

      {/* Top Left Corner */}
      <div className="absolute top-0 left-0 ml-20  w-60 h-60 glassmorphic"></div>

      {/* Top Right Corner */}
      <div className="absolute top-0 right-0 mr-20 w-60 h-60 glassmorphic"></div>

      {/* Bottom Left Corner */}
      <div className="absolute bottom-0 left-0 ml-20 w-60 h-60 glassmorphic"></div>

      {/* Bottom Right Corner */}
      <div className="absolute bottom-0 right-0 mr-20 w-60 h-60 glassmorphic"></div>
    </div>
  );
};

export default Adopt;
