import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram } from "lucide-react";
import Headerpage from "./header";

function Home() {
  return (
    <div>
      {/* Fixed Header (Optional) */}
      {/* <div className="fixed top-0 left-0 w-full z-50">
        <Headerpage />
      </div> */}

      {/* Hero Section (Promo Page) */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center"
      >
        <div className="max-w-3xl px-4 py-16 mx-auto text-center">
          <h1 className="px-4 py-2 sm:px-6 sm:py-3 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-200 text-white mb-6 shadow-lg hover:shadow-xl shadow-blue-300">
            Welcome to Pixora UI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-6">
            Explore the world of modern UI components and icons, designed to empower developers to create stunning interfaces with ease.
          </p>
          {/* Always inline: flex-row on all screens */}
          <div className="flex flex-row justify-center items-center gap-4">
            <Link
              to="/icons"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-tr from-blue-200 to-blue-400 hover:from-blue-400 hover:to-blue-200 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl shadow-blue-300"
            >
              Explore Icons
            </Link>
            <Link
              to="/components"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-tr from-orange-200 to-red-400 hover:from-red-400 hover:to-yellow-200 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl shadow-red-300"
            >
              Read Docs
            </Link>
          </div>
          <p className="text-sm text-black mt-8">
            Project by CodewChinmay.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/codewchinmay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-500 hover:text-orange-400 transition-colors" />
            </a>
            <a
              href="https://github.com/codewchinmay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-500 hover:text-orange-400 transition-colors" />
            </a>
            <a
              href="https://instagram.com/codewchinmay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-500 hover:text-orange-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
