import React from "react";
import logo from "../logo/homebanner.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center text-center"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Overlay */}
      <div className="absolute left-40 bottom-100 mb-20 ml-20">
        <div className=" inline-flex ml px-4 py-2 text-sm border rounded-full border-white ">
          <h2 className="text-4xl md:text-5xl lg:text-xs font-bold text-white">
          Adopt, Care & Save
          </h2>
        </div>
      </div>
      <div>
      <h1 className="mt-8 text-white lg:text-5xl font-bold absolute left-40 ml-20 bottom-100 mb-20 md:text-xs">
        Protect You &amp; Your Loved Ones
        with <br /> <span className="text-red">The Safekey.</span>
      </h1>
    </div>
    </div>
  );
};

export default Home;
