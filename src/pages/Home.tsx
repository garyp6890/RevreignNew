import React from 'react';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedMerchSection from '../components/home/FeaturedMerchSection';
import PartnershipSection from '../components/home/PartnershipSection';
import StorefrontsSection from '../components/home/StorefrontsSection';
import homeData from '../data/home.json';
import socialData from '../data/social.json';
import type { HomeData, SocialStats } from '../types';

const Home: React.FC = () => {
  const typedHomeData = homeData as HomeData;
  const typedSocialData = socialData as SocialStats;

  if (!typedHomeData || !typedSocialData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-rev-brown mb-4">
            Unable to load page
          </h2>
          <p className="text-gray-600">
            Data not available
          </p>
        </div>
      </div>
    );
  }

  if (!typedHomeData.enabled) return null;

  return (
    <div className="bg-rev-light">
      <HeroSection hero={typedHomeData.hero} />
      <AboutSection about={typedHomeData.about} socialData={typedSocialData} />
      <FeaturedMerchSection featuredMerch={typedHomeData.featuredMerch} />
      <PartnershipSection partnerships={typedHomeData.partnerships} />
      <StorefrontsSection storefronts={typedHomeData.storefronts} />
    </div>
  );
};

export default Home;