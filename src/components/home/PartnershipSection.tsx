import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import type { PartnershipSection as PartnershipSectionType } from '../../types';

interface PartnershipSectionProps {
  partnerships: PartnershipSectionType;
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({ partnerships }) => {
  if (!partnerships.enabled) return null;

  return (
    <section className="py-16 bg-rev-brown text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 font-heading">
              {partnerships.title}
            </h2>
            <p className="mb-6 text-gray-200 leading-relaxed">
              {partnerships.description}
            </p>

            <div className="bg-rev-dark/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-rev-orange">
                Key Engagement Stats
              </h3>
              <ul className="space-y-2 text-gray-200">
                {partnerships.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="bg-rev-orange rounded-full p-1 mr-2"></span>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/partnerships"
              className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded inline-flex items-center transition-colors"
            >
              <Users className="mr-2" size={18} />
              {partnerships.ctaText}
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={partnerships.image}
              alt={partnerships.altText || 'Partnership Image'}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnershipSection);