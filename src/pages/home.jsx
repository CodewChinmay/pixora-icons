import { Link } from "react-router-dom";

import { Linkedin, Github, Instagram } from "lucide-react";

import Headerpage from "./header";

function Home() {
  return (
    <div>
      {/* Fixed Header */}
      {/* <div className="fixed top-0 left-0 w-full z-50">
        <Headerpage />
      </div> */}

      {/* Hero Section (Promo Page) */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center h-[700px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center"
      >
<div className="max-w-3xl px-4 py-16 mx-auto text-center">
  <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-700 to-purple-400 bg-clip-text text-transparent mb-6">
    Welcome to Pixora UI
  </h1>

  <p className="text-xl text-gray-300 mb-6">
    Explore the world of modern UI components and icons, designed to empower developers to create stunning interfaces with ease.
  </p>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    <Link
      to="/icons"
      className="px-8 py-4 bg-gradient-to-tr from-orange-400 to-red-700 hover:from-red-500 hover:to-yellow-500 transition-all duration-300 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl"
    >
      Icons
    </Link>
    <Link
      to="/components"
      className="px-8 py-4 bg-gradient-to-tr from-red-700 to-orange-400 hover:from-orange-400 hover:to-red-500 transition-all duration-300 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl"
    >
      Components
    </Link>
  </div>
  <p className="text-sm text-gray-400 mt-8">
    Project by CodewChinmay.
  </p>

  <div className="flex justify-center items-center gap-4 mt-4">
    <a
      href="https://www.linkedin.com/in/codewchinmay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors" />
    </a>
    <a
      href="https://github.com/codewchinmay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors" />
    </a>
    <a
      href="https://instagram.com/codewchinmay"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors" />
    </a>
  </div>

</div>


      </section>
    </div>
  );
}

export default Home;
