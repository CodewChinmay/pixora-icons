import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Headerpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand / Logo */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
            Pixora UI
          </h1>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-blue-400 text-1xl hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/icons"
              className="text-blue-400 text-1xl hover:text-blue-600 transition-colors"
            >
              Icons
            </Link>
            <Link
              to="/components"
              className="text-blue-400 text-1xl hover:text-blue-600 transition-colors"
            >
              Components
            </Link>
            <Link
              to="/docs"
              className="text-blue-400 text-1xl hover:text-blue-600 transition-colors"
            >
              Docs
            </Link>
          </nav>
          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/80 backdrop-blur-sm border-t border-gray-700">
          <nav className="px-4 py-2 space-y-1">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/icons"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Icons
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/components"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Components
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/docs"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Headerpage;
