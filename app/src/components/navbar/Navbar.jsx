import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-offwhite p-4 fixed w-full z-2000 top-0">
      <div className="flex justify-between items-center w-full px-4">
        
        {isSmallScreen ? (
          <button onClick={toggleMenu} className="md:hidden focus:outline-none ml-auto">
            <svg
              className={`w-8 h-8 cursor-pointer text-gray-500 ml-auto ${isOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              className={`w-8 h-8 cursor-pointer text-gray-500 ml-auto ${isOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        ) : null}
      </div>
      {isSmallScreen ? (
        <div>
            <div className="flex items-center">
          <div className="text-2xl font-bold flex-grow text-center">
            EasyAccess
          </div>
        </div>
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white mt-2 w-full py-2 px-4`}>
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
        </div>
      ) : (
        
        <div className="hidden md:flex bg-transparent mt-2 w-full px-4">
            <div className="flex items-center">
          <div className="text-2xl font-bold flex-grow text-center">
            EasyAccess
          </div>
        </div>
          <div className="flex items-center justify-end w-full">
            <div className="ml-auto flex items-center">
              <a href="#about" className="text-black hover:text-gray-500 px-4">About</a>
              <a href="#papers" className="text-black hover:text-gray-500 px-4">Papers</a>
              <a href="#contact" className="text-black hover:text-gray-500 px-4">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
  
};

export default Navbar;
