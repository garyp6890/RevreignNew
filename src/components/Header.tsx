import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PenTool as Tool, Car, ShoppingBag } from 'lucide-react';
import { TikTok, Instagram, Youtube } from './SocialIcons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-rev-brown text-rev-light">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center" 
            onClick={closeMenu}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/642eac20a7d7f84999ae8c7b/bf53b8cc-9527-4f26-9af8-656ef6dac904/Revreign+skull+transparent.png?format=1500w"
              alt="Revreign Logo"
              className="h-12 w-auto mr-2"
            />
            <span className="text-2xl font-bold font-heading hidden lg:block">Revreign</span>
          </Link>

          {/* Desktop Navigation - Adjusted spacing and added nowrap */}
          <nav className="hidden md:flex items-center whitespace-nowrap overflow-x-auto">
            <Link 
              to="/" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/') ? 'text-rev-orange font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/links" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/links') ? 'text-rev-orange font-bold' : ''}`}
            >
              My Links
            </Link>
            <Link 
              to="/partnerships" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/partnerships') ? 'text-rev-orange font-bold' : ''}`}
            >
              Partner With Us
            </Link>
            <Link 
              to="/merchandise" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/merchandise') ? 'text-rev-orange font-bold' : ''}`}
            >
              Merchandise
            </Link>
            <Link 
              to="/amazon" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/amazon') ? 'text-rev-orange font-bold' : ''}`}
            >
              Amazon Storefront
            </Link>
            <Link 
              to="/walmart" 
              className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${isActive('/walmart') ? 'text-rev-orange font-bold' : ''}`}
            >
              Walmart Storefront
            </Link>
            <a 
              href="/admin/" 
              className="hover:text-rev-orange transition-colors px-2 lg:px-3 bg-rev-orange/20 rounded"
            >
              Admin
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-rev-light hover:text-rev-orange"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rev-dark text-rev-light">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/links" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/links') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              My Links
            </Link>
            <Link 
              to="/partnerships" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/partnerships') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              Partner With Us
            </Link>
            <Link 
              to="/merchandise" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/merchandise') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              Merchandise
            </Link>
            <Link 
              to="/amazon" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/amazon') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              Amazon Storefront
            </Link>
            <Link 
              to="/walmart" 
              className={`py-2 hover:text-rev-orange transition-colors ${isActive('/walmart') ? 'text-rev-orange font-bold' : ''}`}
              onClick={closeMenu}
            >
              Walmart Storefront
            </Link>
            <a 
              href="/admin/" 
              className="py-2 hover:text-rev-orange transition-colors bg-rev-orange/20 rounded px-2"
              onClick={closeMenu}
            >
              Admin
            </a>

            {/* Social Links in Mobile Menu */}
            <div className="flex space-x-4 pt-4 border-t border-rev-beige/20">
              <a href="https://tiktok.com/@revreignofficial" target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange">
                <TikTok size={20} />
              </a>
              <a href="https://instagram.com/revreignauto" target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@revreign" target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange">
                <Youtube size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;