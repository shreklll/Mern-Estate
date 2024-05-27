// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin,FaInstagramSquare,FaYoutube, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h5 className="font-bold text-2xl mb-3"> cornerstone</h5>
          <ul>
           <li>Address:........</li>
           <li><span className='text-purple-300 font-bold' >Call: </span>02086955000 </li>
           <li><span className='text-purple-300 font-bold' >Email:</span> info@cornerstone-web.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">HELP & CONTACT</h5>
          <ul>
            <li>Contact us</li>
            <li>Blogs and news</li>
            <li>Login</li>
            <li>Terms & conditions</li>
            <li>FAQs</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">USEFUL LINKS</h5>
          <ul>
            <li>Sell a property</li>
            <li>Buy a property</li>
            <li>Let a property</li>
            <li>Rent a property</li>
            <li>Maintenance service</li>
            <li>Property search</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">FOLLOW US ON</h5>
          <div className="flex space-x-3">
           
            <FaLinkedin />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaYoutube />
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
