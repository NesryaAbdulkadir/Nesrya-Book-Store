import React from "react";

export default function Hero() {
  const re =
    "grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:gap-20 gap-5 justify-between w-11/12 items-center";

  return (
    <div className="flex flex-col items-center justify-center w-screen p-20 bg-white">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row md:gap-20 ">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to our cozy nook of stories!
          </h1>
          <p className="text-xl  mt-5">
            Whether you're a lifelong book lover or just beginning your reading
            journey, we’re here to help you find your next great read.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md mt-10">
            Explore Our Events
          </button>
        </div>
        <div className="text-center flex items-center justify-center">
          <img
            src="hero.png"
            className="w-52 md:w-72 md:h-auto"
            alt="Stack of books"
          />
        </div>
      </div>
    </div>
  );
}
