import React from 'react';
import './Footer.css'; // Import the CSS file for footer styles

const Footer = () => {
  return (
    <footer className="text-white py-12 relative footer flex flex-col bottom-0 overflow-hidden  left-0 w-full bg-black">
      <div className="container mx-6 px-4 py-5 justify-center items-center text-center mb-4 w-full z-10">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <div className="text-sm mb-2">
          <p>Email: <a href="mailto:contact@website.com" className="text-white">contact@yourwebsite.com</a></p>
          <p>Phone: (91) 1231234121</p>
          <p>Address: 123 Street, City, State, 12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
