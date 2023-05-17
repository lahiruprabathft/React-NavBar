import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">

    
      <div className="flex items-center justify-end sm:hidden"> {/* Update the class to justify-end */}
      <button
          type="button"
          className=" text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <AiOutlineClose className="h-6 w-6" />
          ) : (
            <AiOutlineMenu className="h-6 w-6" />
          )}
        </button>
        </div>
     
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
      <div className={`bg-white w-[300px] mt-5 sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              onClick={toggleMenu} 
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              onClick={toggleMenu} 
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              onClick={toggleMenu} 
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

</div>

    </div>
  );
};

export default MobileMenu;
