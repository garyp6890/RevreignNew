// File: src/pages/Merchandise.tsx
import React, { useEffect, useState } from 'react';
import MerchCard from '../components/MerchCard';
import { useTheme } from '../context/ThemeContext';

interface MerchItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  buyLink: string;
  shopifyProductId?: string;
}

const Merchandise: React.FC = () => {
  const { isCavemanMode } = useTheme();
  const [merchandise, setMerchandise] = useState<MerchItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMerchandise = () => {
      try {
        // Dynamically import all JSON files in src/data/merchandise
        const modules = import.meta.glob('../data/merchandise/*.json', { eager: true });
        const items: MerchItem[] = Object.values(modules).map((mod: any, idx) => ({
          // Each JSON module should export fields matching our MerchItem interface
          id: mod.id || `merch-${idx + 1}`,
          title: mod.title,
          description: mod.description,
          price: mod.price,
          image: mod.image,
          buyLink: mod.buyLink,
          shopifyProductId: mod.shopifyProductId || undefined
        }));
        setMerchandise(items);
      } catch (error) {
        console.error('Failed to load merchandise JSON files:', error);
        setMerchandise([]); // Leave empty if import fails
      } finally {
        setLoading(false);
      }
    };

    loadMerchandise();
  }, []);

  return (
    <div className="min-h-screen bg-rev-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-rev-brown mb-4 font-heading">
            Caveman Collection
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Show your support with our exclusive Caveman-themed merchandise. Each purchase helps fuel more automotive content!
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rev-orange"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {merchandise.map(item => (
              <MerchCard
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                price={item.price}
                buyLink={item.buyLink}
                shopifyProductId={item.shopifyProductId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Merchandise;
