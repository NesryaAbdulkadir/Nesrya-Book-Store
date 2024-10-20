import React, { useState } from "react";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-screen fixed py-5 lg:px-40 sm:px-20 px-10 top-0 z-50 shadow-md bg-white">
        <img src="logo.png" className="w-14 h-auto" alt="logo" />
        <ul className="hidden md:flex  gap-10">
          {navItems.map((item) => (
            <li
              className="hover:border-b-2 border-b-0 border-black"
              key={item.id}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <ul className="flex flex-col md:hidden justify-center items-center gap-5 absolute p-14 top-20 right-0 bg-white w-screen shadow-md">
            {navItems.map((item) => (
              <li
                className="hover:border-b-2 border-b-0 border-black max-w-max text-center"
                key={item.id}
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
