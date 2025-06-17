// File: src/pages/Links.tsx
import React from 'react';
import SocialButton from '../components/SocialButton';
import { TikTok, Instagram, Youtube } from '../components/SocialIcons';
import linksContent from '../data/links.json';

const Links: React.FC = () => {
  // If the Links page is toggled off, render nothing
  if (!linksContent.enabled) return null;

  const { pageTitle, introText, socialLinks, reasonBlock } = linksContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rev-beige/30 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
            {pageTitle}
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">{introText}</p>
        </div>

        {/* Social Buttons */}
        <div className="max-w-4xl mx-auto space-y-6">
          {socialLinks.map((link, idx) => {
            // Determine which icon component to use based on the platform
            let IconComponent = null;
            if (link.platform === 'tiktok') IconComponent = <TikTok size={32} />;
            else if (link.platform === 'instagram') IconComponent = <Instagram size={32} />;
            else if (link.platform === 'youtube') IconComponent = <Youtube size={32} />;
            // Fallback: if no platform match, leave IconComponent null

            return (
              <SocialButton
                key={idx}
                platform={link.platform}
                username={link.username}
                followers={link.followers}
                url={link.url}
                icon={IconComponent}
              />
            );
          })}

          {/* “Why Follow” Section */}
          {reasonBlock.enabled && (
            <div className="mt-12 bg-rev-dark text-white p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-rev-orange font-heading">
                {reasonBlock.title}
              </h2>
              <div className="space-y-4 text-gray-200">
                {reasonBlock.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
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
