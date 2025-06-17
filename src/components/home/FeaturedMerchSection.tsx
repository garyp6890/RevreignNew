import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import type { FeaturedMerch } from '../../types';

interface FeaturedMerchSectionProps {
  featuredMerch: FeaturedMerch;
}

const FeaturedMerchSection: React.FC<FeaturedMerchSectionProps> = ({ featuredMerch }) => {
  const { isCavemanMode } = useTheme();

  if (!featuredMerch.enabled || !featuredMerch.items.length) return null;

  const cavemanStyles = !isCavemanMode ? ({
    '--rev-brown': '#3A2A1B',
    '--rev-beige': '#D8C3A5',
    '--rev-orange': '#E8871E',
    '--rev-yellow': '#FFC107',
    '--rev-dark': '#1E1810',
    '--rev-light': '#F5F0E8'
  } as React.CSSProperties) : undefined;

  return (
    <section className="py-16 bg-rev-beige/30">
      <div className="container mx-auto px-4" style={cavemanStyles}>
        <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">
          {featuredMerch.title}
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          {featuredMerch.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredMerch.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-80 bg-rev-brown flex justify-center items-center p-4">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <img
                    src={item.image1}
                    alt={`${item.title} Design`}
                    className="h-full object-contain"
                  />
                  <img
                    src={item.image2}
                    alt={`${item.title} Model`}
                    className="h-full object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-rev-brown">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <a
                  href={item.buyLink}
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                >
                  <ShoppingBag className="mr-2" size={18} />
                  {item.ctaText || 'Buy Now'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeaturedMerchSection);