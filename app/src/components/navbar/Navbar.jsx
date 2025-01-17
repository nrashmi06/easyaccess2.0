// Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({  darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const Sun = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffe747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
  
  const Moon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-offwhite p-4 w-full">
      <div className="flex justify-between items-center w-full px-4">
        {isSmallScreen ? (
          <>
            <div className="text-2xl font-bold text-black dark:text-white">
              EasyAccess
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-8 h-8 cursor-pointer text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="text-2xl font-bold text-black dark:text-white">
              EasyAccess
            </div>
            <div className="flex items-center gap-6">
              <a href="#section1" className="text-black dark:text-white hover:text-gray-500" onClick={() => scrollToSection('section1')}>
                About
              </a>
              <a href="#section2" className="text-black dark:text-white hover:text-gray-500" onClick={() => scrollToSection('section2')}>
                Papers
              </a>
              <a href="#section3" className="text-black dark:text-white hover:text-gray-500" onClick={() => scrollToSection('section3')}>
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </div>
          </div>
        )}
      </div>
      
      {isSmallScreen && isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 mt-2 w-full py-2 px-4">
          <a href="#section1" className="block text-black dark:text-white hover:text-gray-500 py-2" onClick={() => scrollToSection('section1')}>
            About
          </a>
          <a href="#section2" className="block text-black dark:text-white hover:text-gray-500 py-2" onClick={() => scrollToSection('section2')}>
            Papers
          </a>
          <a href="#section3" className="block text-black dark:text-white hover:text-gray-500 py-2" onClick={() => scrollToSection('section3')}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;