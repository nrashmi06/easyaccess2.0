import React from 'react';
import './Footer.css'; // Import the CSS file for footer styles

const Footer = () => {
  return (
    <footer className="text-white py-12 relative footer flex flex-colbottom-0 left-0 w-full">
      {/* SVG Wave */}
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className="svg w-screen h-auto absolute bottom-0 left-0 z-0">
        <path d="M0,400 C150,300 350,500 500,400 L500,500 L0,500 Z" className="wave-path"></path>
      </svg>
      <div className="container mx-2 px-4 py-5 text-balance mb-4 w-full z-10">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <div className="text-sm mb-2">
          <p>Email: <a href="mailto:contact@yourwebsite.com" className="text-white">contact@yourwebsite.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Your Street, Your City, Your State, 12345</p>
        </div>
        <div className='bg-black'></div>
      </div>
    </footer>
  );
};

export default Footer;
