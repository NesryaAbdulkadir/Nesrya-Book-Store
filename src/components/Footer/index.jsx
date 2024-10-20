import { Copyright } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-between items-center w-screen lg:px-40 sm:px-20 px-10  z-50  py-10 shadow-md  bg-white">
        <img src="logo.png" className="w-14 h-auto" alt="logo" />
        <Copyright />
      </div>
    </div>
  );
}
