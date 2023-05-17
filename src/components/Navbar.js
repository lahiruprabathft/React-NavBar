import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-4 px-8 sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Logo</div>
        <MobileMenu />
      </div>
      <ul className="hidden sm:flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
