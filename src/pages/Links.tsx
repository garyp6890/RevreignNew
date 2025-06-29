import React from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import SocialButton from '../components/SocialButton';
import { TikTok, Instagram, Youtube } from '../components/SocialIcons';
import linksData from '../data/links.json';
import type { LinksData } from '../types';

const iconMap = {
  tiktok: TikTok,
  instagram: Instagram,
  youtube: Youtube
};

const Links: React.FC = () => {
  const typedLinksData = linksData as LinksData;

  if (!typedLinksData || !typedLinksData.enabled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-rev-brown mb-4">
            Page not available
          </h2>
        </div>
      </div>
    );
  }

  const { pageTitle, introText, socialLinks, reasonBlock } = typedLinksData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rev-beige/30 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
            {pageTitle}
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">{introText}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {socialLinks.map((link, idx) => {
            const IconComponent = iconMap[link.platform as keyof typeof iconMap];
            
            return (
              <SocialButton
                key={idx}
                platform={link.platform as any}
                username={link.username}
                followers={link.followers}
                url={link.url}
                icon={IconComponent ? <IconComponent size={32} /> : null}
              />
            );
          })}

          {reasonBlock.enabled && (
            <div className="mt-12 bg-rev-dark text-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-rev-orange font-heading">
                {reasonBlock.title}
              </h2>
              <div className="space-y-4 text-gray-200">
                {reasonBlock.paragraphs.map((paragraphObj, idx) => (
                  <p key={idx}>{paragraphObj.text}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;