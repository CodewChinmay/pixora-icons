import { Link } from "react-router-dom";

function Headerpage() {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand / Logo */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-700 to-purple-400 bg-clip-text text-transparent">
            Pixora UI
          </h1>
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/icons" className="text-gray-300 hover:text-white transition-colors">
              Icons
            </Link>
            <Link to="/components" className="text-gray-300 hover:text-white transition-colors">
              Components
            </Link>
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
              Docs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Headerpage;
