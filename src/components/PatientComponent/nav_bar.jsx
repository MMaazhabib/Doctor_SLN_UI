import React from "react";

function Navbar() {
  
  
  return (
    <>
      
      <div className="bg-black flex justify-between items-center h-24  px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Doctor</h1>

        {/* Desktop Navigation */}
        <ul className="hidde md:flex">
            <li
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              
            </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;