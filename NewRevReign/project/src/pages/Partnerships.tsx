// File: src/pages/Partnerships.tsx
import React from 'react';
import {
  Mail,
  TrendingUp,
  FileText,
  Users,
  Calendar,
  CheckSquare
} from 'lucide-react';
import partnershipsContent from '../data/partnerships.json';

const Partnerships: React.FC = () => {
  if (!partnershipsContent.enabled) return null;

  const {
    hero,
    statsSection,
    pastWork,
    upcomingProjects,
    rateCard,
    contactCTA
  } = partnershipsContent;

  return (
    <div className="min-h-screen bg-rev-light">
      {/* =============== Hero Section =============== */}
      {hero.enabled && (
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
            style={{
              backgroundImage: `url('${hero.backgroundImage}')`
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-rev-brown font-heading">
                {hero.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8">{hero.subtitle}</p>
              <a
                href={hero.contactMailto}
                className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-colors"
              >
                <Mail className="mr-2" size={20} />
                {hero.contactButtonText}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* =============== Stats Section =============== */}
      {statsSection.enabled && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-rev-brown text-center font-heading">
              {statsSection.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statsSection.items.map((item, idx) => (
                <div key={idx} className="bg-rev-beige/20 p-6 rounded-lg text-center">
                  <div className="bg-rev-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {item.icon === 'users' && <Users size={32} className="text-white" />}
                    {item.icon === 'trendingUp' && <TrendingUp size={32} className="text-white" />}
                    {item.icon === 'checkSquare' && <CheckSquare size={32} className="text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-rev-brown mb-2">
                    {item.statValue}
                  </h3>
                  <p className="text-gray-700">{item.statLabel}</p>
                  {item.statSubLabel && (
                    <p className="text-sm text-gray-500 mt-2">{item.statSubLabel}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =============== Past Work Section =============== */}
      {pastWork.enabled && (
        <section className="py-16 bg-rev-beige/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-rev-brown text-center font-heading">
              {pastWork.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWork.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.altText || item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-rev-brown">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex items-center text-rev-orange">
                      {item.icon === 'trendingUp' && <TrendingUp size={18} className="mr-2" />}
                      <span className="text-sm font-medium">{item.statText}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =============== Upcoming Projects Section =============== */}
      {upcomingProjects.enabled && (
        <section className="py-16 bg-rev-brown text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center font-heading">
              {upcomingProjects.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {upcomingProjects.items.map((proj, idx) => (
                <div key={idx} className="bg-rev-dark/50 p-6 rounded-lg">
                  <div className="flex items-start">
                    {proj.icon === 'calendar' && (
                      <Calendar size={24} className="text-rev-orange mr-4 flex-shrink-0 mt-1" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                      <p className="text-gray-200">{proj.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =============== Rate Card Section =============== */}
      {rateCard.enabled && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-rev-brown font-heading">
                {rateCard.title}
              </h2>
              <p className="text-gray-700 mb-10">{rateCard.introText}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {rateCard.items.map((item, idx) => (
                  <div key={idx} className="bg-rev-beige/20 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-rev-brown">{item.platform}</h3>
                    <ul className="space-y-3">
                      {item.rates.map((r, j) => (
                        <li key={j} className="flex justify-between">
                          <span>{r.label}</span>
                          <span className="font-bold">{r.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <a
                  href={rateCard.contactMailto}
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
                >
                  <Mail className="mr-2" size={20} />
                  {rateCard.contactButtonText}
                </a>
                <a
                  href={rateCard.downloadLink}
                  className="border-2 border-rev-brown text-rev-brown hover:bg-rev-brown hover:text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
                >
                  <FileText className="mr-2" size={20} />
                  {rateCard.downloadButtonText}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =============== Contact CTA Section =============== */}
      {contactCTA.enabled && (
        <section className="py-16 bg-rev-beige/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-rev-brown font-heading">
              {contactCTA.title}
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              {contactCTA.description}
            </p>
            <a
              href={contactCTA.contactMailto}
              className="bg-rev-brown hover:bg-rev-dark text-white font-bold py-4 px-8 rounded-lg inline-flex items-center transition-colors"
            >
              <Mail className="mr-2" size={20} />
              {contactCTA.contactButtonText}
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default Partnerships;
