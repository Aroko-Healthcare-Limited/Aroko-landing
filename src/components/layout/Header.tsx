import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from "../theme/theme-toggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="https://arokohealth.com/assets/images/logo/aroko-logo.png" alt="Aroko Healthcare" className="h-10" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-blue-500"
              onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
            >
              About Us <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-40">
              <a href="/about" className="block px-4 py-2 text-primary hover:bg-gray-100">About</a>
              <a href="/mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mission</a>
              <a href="/vision" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vision</a>
              <a href="/board" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Board of Directors</a>
              <a href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team Lead</a>
            </div>
          </div>
          <a href="/blog" className="text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#plans" className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600">
            Plans
          </a>

          <ThemeToggle /> {/* Add Theme Toggle here */}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2 px-4">
            <a href="/" className="text-gray-700 hover:text-blue-500 py-2">Home</a>
            <button 
              onClick={() => setIsAboutMenuOpen(!isAboutMenuOpen)}
              className="text-left text-gray-700 hover:text-blue-500 py-2"
            >
              About Us <span className="ml-1">▼</span>
            </button>
            {isAboutMenuOpen && (
              <div className="ml-4 space-y-2">
                <a href="/about" className="block py-2 text-gray-700 hover:bg-gray-100">About</a>
                <a href="/mission" className="block py-2 text-gray-700 hover:bg-gray-100">Mission</a>
                <a href="/vision" className="block py-2 text-gray-700 hover:bg-gray-100">Vision</a>
                <a href="/board" className="block py-2 text-gray-700 hover:bg-gray-100">Board of Directors</a>
                <a href="/team" className="block py-2 text-gray-700 hover:bg-gray-100">Team Lead</a>
              </div>
            )}
            <a href="/blog" className="text-gray-700 hover:text-blue-500 py-2">Blog</a>
            <a href="#plans" className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600 text-center">
              Plans
            </a>

            <ThemeToggle /> {/* Add Theme Toggle here */}
          </nav>
        </div>
      )}
    </header>
  );
}