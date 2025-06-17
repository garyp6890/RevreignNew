import React from 'react';
import { useJsonData } from '../hooks/useJsonData';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedMerchSection from '../components/home/FeaturedMerchSection';
import PartnershipSection from '../components/home/PartnershipSection';
import StorefrontsSection from '../components/home/StorefrontsSection';
import type { HomeData, SocialStats } from '../types';

const Home: React.FC = () => {
  const { data: homeData, loading: homeLoading, error: homeError } = useJsonData<HomeData>('../data/home.json');
  const { data: socialData, loading: socialLoading, error: socialError } = useJsonData<SocialStats>('../data/social.json');

  if (homeLoading || socialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (homeError || socialError || !homeData || !socialData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rev-light">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-rev-brown mb-4">
            Unable to load page
          </h2>
          <p className="text-gray-600">
            {homeError || socialError || 'Data not available'}
          </p>
        </div>
      </div>
    );
  }

  if (!homeData.enabled) return null;

  return (
    <div className="bg-rev-light">
      <HeroSection hero={homeData.hero} />
      <AboutSection about={homeData.about} socialData={socialData} />
      <FeaturedMerchSection featuredMerch={homeData.featuredMerch} />
      <PartnershipSection partnerships={homeData.partnerships} />
      <StorefrontsSection storefronts={homeData.storefronts} />
    </div>
  );
};

export default Home;