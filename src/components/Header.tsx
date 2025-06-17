import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TikTok, Instagram, Youtube } from './SocialIcons';
import { ROUTES, SOCIAL_LINKS } from '../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.LINKS, label: 'My Links' },
    { path: ROUTES.PARTNERSHIPS, label: 'Partner With Us' },
    { path: ROUTES.MERCHANDISE, label: 'Merchandise' },
    { path: ROUTES.AMAZON, label: 'Amazon Storefront' },
    { path: ROUTES.WALMART, label: 'Walmart Storefront' }
  ];

  return (
    <header className="bg-rev-brown text-rev-light">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to={ROUTES.HOME}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center whitespace-nowrap overflow-x-auto">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`hover:text-rev-orange transition-colors px-2 lg:px-3 ${
                  isActive(item.path) ? 'text-rev-orange font-bold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={ROUTES.ADMIN}
              className="hover:text-rev-orange transition-colors px-2 lg:px-3 bg-rev-orange/20 rounded"
            >
              Admin
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-rev-light hover:text-rev-orange transition-colors"
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
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`py-2 hover:text-rev-orange transition-colors ${
                  isActive(item.path) ? 'text-rev-orange font-bold' : ''
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={ROUTES.ADMIN}
              className="py-2 hover:text-rev-orange transition-colors bg-rev-orange/20 rounded px-2"
              onClick={closeMenu}
            >
              Admin
            </a>

            {/* Social Links in Mobile Menu */}
            <div className="flex space-x-4 pt-4 border-t border-rev-beige/20">
              <a href={SOCIAL_LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange transition-colors">
                <TikTok size={20} />
              </a>
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover:text-rev-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);