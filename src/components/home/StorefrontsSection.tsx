import React from 'react';
import { Link } from 'react-router-dom';
import type { StorefrontsSection as StorefrontsSectionType } from '../../types';

interface StorefrontsSectionProps {
  storefronts: StorefrontsSectionType;
}

const StorefrontsSection: React.FC<StorefrontsSectionProps> = ({ storefronts }) => {
  if (!storefronts.enabled) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-rev-brown text-center font-heading">
          {storefronts.title}
        </h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          {storefronts.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {storefronts.items.map((card, idx) => (
            <div key={idx} className="bg-rev-beige/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src={card.image}
                alt={card.label}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-rev-brown">{card.label}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <Link
                to={card.linkTo}
                className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
              >
                {card.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(StorefrontsSection);