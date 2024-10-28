import React from "react";
import logo from "../logo/homebanner.webp";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
        <img src={logo} alt="banner" className=" h-auto md:w-full"/>
      <h2 className="text-4xl font-bold text-red-600"></h2>
    </div>
  );
};

export default Home;
