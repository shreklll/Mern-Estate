// src/components/Header.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-24 h-auto md:w-40" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Selling</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Buying</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Rentting</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Letting</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Maintenance</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium">Packages&Fees</a>
            <a href="#" className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
            <a href="#" className="flex items-center bg-purple-500 text-white hover:bg-purple-600 px-3 py-2 rounded-md text-sm font-medium">
            <FaUserCircle className="h-5 w-5 mr-2"/> Login </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-900 hover:text-purple-500 focus:outline-none focus:text-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4  12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-900 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Selling</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Buying</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Renting</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Letting</a>
            <a href="#" className="text-gray-900 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium">Maintenance</a>
            <a href="#" className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white block px-3 py-2 text-base font-medium ">Contact us</a>
            <a href="#" className="bg-purple-500 text-white hover:bg-purple-600 block px-3 py-2 text-base font-medium "><FaUserCircle className="h-5 w-5 mr-2"/> Login </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
