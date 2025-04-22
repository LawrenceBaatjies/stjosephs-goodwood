
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-church-red">St Joseph's</span>
          <span className="ml-2 text-sm text-gray-500 hidden sm:block">Catholic Church Goodwood</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-church-red transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-church-red transition-colors">
            About
          </Link>
          <Link to="/mass-times" className="text-gray-800 hover:text-church-red transition-colors">
            Mass Times
          </Link>
          <Link to="/parish-groups" className="text-gray-800 hover:text-church-red transition-colors">
            Parish Groups
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-church-red transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-church-red"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-church-red py-2 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-church-red py-2 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/mass-times"
                className="text-gray-800 hover:text-church-red py-2 transition-colors"
                onClick={toggleMenu}
              >
                Mass Times
              </Link>
              <Link
                to="/parish-groups"
                className="text-gray-800 hover:text-church-red py-2 transition-colors"
                onClick={toggleMenu}
              >
                Parish Groups
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-church-red py-2 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
