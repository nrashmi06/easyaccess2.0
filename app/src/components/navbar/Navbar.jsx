import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-50 text-offwhite p-4 fixed w-full z-10 top-0">
      <div className="flex justify-between items-center w-full px-4">
        <div className="text-2xl font-bold">
          EasyAccess
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className={`w-8 h-8 cursor-pointer text-gray-500 ${isOpen ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fontFamily='bold'
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            className={`w-8 h-8 cursor-pointer text-gray-500 ${isOpen ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="bg-white mt-2 w-full py-2 px-4">
          <div className="relative group">
            <a href="#about" className="block hover:text-gray-300 py-2">About</a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
          <div className="relative group">
            <a href="#papers" className="block hover:text-gray-300 py-2">Papers</a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
          <div className="relative group">
            <a href="#contact" className="block hover:text-gray-300 py-2">Contact</a>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
