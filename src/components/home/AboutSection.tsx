import React from 'react';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import SocialStatsSlider from './SocialStatsSlider';
import type { AboutSection as AboutSectionType, SocialStats } from '../../types';

interface AboutSectionProps {
  about: AboutSectionType;
  socialData: SocialStats;
}

const AboutSection: React.FC<AboutSectionProps> = ({ about, socialData }) => {
  if (!about.enabled) return null;

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <img
              src={about.image}
              alt={about.altText || 'About Image'}
              className="rounded-lg shadow-lg w-full h-auto max-h-[500px] object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-rev-brown font-heading">
              {about.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {about.description}
            </p>

            {about.showSocialStats && (
              <SocialStatsSlider socialData={socialData} />
            )}

            <Link
              to="/links"
              className="inline-flex items-center text-rev-orange hover:text-rev-brown font-semibold transition-colors"
            >
              Follow me across platforms <Share2 className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutSection);