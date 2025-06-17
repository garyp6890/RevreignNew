import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, TrendingUp } from 'lucide-react';
import type { HeroSection as HeroSectionType } from '../../types';

interface HeroSectionProps {
  hero: HeroSectionType;
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  if (!hero.enabled) return null;

  return (
    <section className="relative h-[40vh] min-h-[270px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('${hero.backgroundImage}')`
        }}
      />
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 font-heading">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-200">
            {hero.subtitle}
          </p>
          <p className="text-base sm:text-lg mb-4 text-gray-200 max-w-2xl">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              to="/links"
              className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
            >
              <Share2 className="mr-2" size={18} />
              {hero.cta1Text}
            </Link>
            <Link
              to="/partnerships"
              className="bg-white hover:bg-rev-beige text-rev-brown font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors inline-flex items-center text-sm sm:text-base"
            >
              <TrendingUp className="mr-2" size={18} />
              {hero.cta2Text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);