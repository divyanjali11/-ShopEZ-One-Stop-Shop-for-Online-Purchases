// client/src/Navbar.js

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    console.log("Navbar component rendered");
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold text-blue-600 flex items-center space-x-2">
          <FaShoppingCart className="text-blue-500" />
          <span>ShopeZ</span>
        </div>

        {/* Nav Links */}
        <div className="space-x-4 text-sm font-medium text-gray-600 hidden sm:block">
          <a href="#register" className="hover:text-blue-600">Register</a>
          <a href="#login" className="hover:text-blue-600">Login</a>
          <a href="#add" className="hover:text-blue-600">Add Product</a>
          <a href="#list" className="hover:text-blue-600">Products</a>
          <a href="#cart" className="hover:text-blue-600">Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;