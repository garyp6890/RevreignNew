import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShoppingBag } from 'lucide-react';
import { TikTok, Instagram, Youtube } from './SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rev-brown text-rev-light py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/642eac20a7d7f84999ae8c7b/bf53b8cc-9527-4f26-9af8-656ef6dac904/Revreign+skull+transparent.png?format=1500w"
              alt="Revreign Logo"
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2 font-heading">Revreign</h3>
            <p className="text-gray-300">Cars. Creativity. Community.</p>
          </div>

          <nav className="grid grid-cols-2 gap-4 mb-6 md:mb-0">
            <Link to="/" className="hover:text-rev-orange transition-colors">Home</Link>
            <Link to="/links" className="hover:text-rev-orange transition-colors">My Links</Link>
            <Link to="/partnerships" className="hover:text-rev-orange transition-colors">Partner With Us</Link>
            <Link to="/merchandise" className="hover:text-rev-orange transition-colors">Merchandise</Link>
            <Link to="/amazon" className="hover:text-rev-orange transition-colors">Amazon Store</Link>
            <Link to="/walmart" className="hover:text-rev-orange transition-colors">Walmart Store</Link>
          </nav>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://tiktok.com/@revreignofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rev-orange transition-colors"
                aria-label="TikTok"
              >
                <TikTok size={24} />
              </a>
              <a 
                href="https://instagram.com/revreignauto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rev-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com/@revreign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rev-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="mailto:revreignauto@gmail.com" 
                className="hover:text-rev-orange transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-1">Contact: revreignauto@gmail.com</p>
              <p>©{currentYear} Revreign. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;