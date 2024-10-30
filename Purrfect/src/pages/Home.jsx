import React from "react";
import logo from "../logo/homebanner.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <img src={logo} alt="banner" className="w-full h-full object-cover"/>
      <h2 className="text-4xl font-bold text-red-600"></h2>
    </div>
  );
};

export default Home;
