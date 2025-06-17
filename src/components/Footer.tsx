import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { TikTok, Instagram, Youtube } from './SocialIcons';
import { ROUTES, SOCIAL_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.LINKS, label: 'My Links' },
    { path: ROUTES.PARTNERSHIPS, label: 'Partner With Us' },
    { path: ROUTES.MERCHANDISE, label: 'Merchandise' },
    { path: ROUTES.AMAZON, label: 'Amazon Store' },
    { path: ROUTES.WALMART, label: 'Walmart Store' }
  ];

  const socialItems = [
    { href: SOCIAL_LINKS.TIKTOK, icon: TikTok, label: 'TikTok' },
    { href: SOCIAL_LINKS.INSTAGRAM, icon: Instagram, label: 'Instagram' },
    { href: SOCIAL_LINKS.YOUTUBE, icon: Youtube, label: 'YouTube' },
    { href: SOCIAL_LINKS.EMAIL, icon: Mail, label: 'Email' }
  ];

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
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className="hover:text-rev-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={item.href}
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-rev-orange transition-colors"
                    aria-label={item.label}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
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

export default React.memo(Footer);