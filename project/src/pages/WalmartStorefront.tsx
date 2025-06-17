// File: src/pages/WalmartStorefront.tsx
import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import ProductCategory from '../components/ProductCategory';
import walmartContent from '../data/walmart.json';

const WalmartStorefront: React.FC = () => {
  if (!walmartContent.enabled) return null;

  const { pageTitle, introText, banner, categories } = walmartContent;

  return (
    <div className="min-h-screen bg-rev-light py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
            {pageTitle}
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">{introText}</p>
        </div>

        {/* Banner Section */}
        {banner.enabled && (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src={banner.imageUrl}
                  alt={banner.altText || 'Walmart Storefront'}
                  className="w-32 h-32 rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-rev-brown mb-2 font-heading">
                  {banner.title}
                </h2>
                <p className="text-gray-700 mb-4">{banner.description}</p>
                <a
                  href={banner.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
                >
                  <ShoppingBag className="mr-2" size={20} />
                  {banner.buttonText}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Product Categories */}
        {categories.map((category, idx) =>
          category.enabled ? (
            <ProductCategory
              key={idx}
              title={category.title}
              description={category.description}
              link={category.categoryLink}
              products={category.products}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default WalmartStorefront;
