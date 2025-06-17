import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ShopifyBuyButton from './ShopifyBuyButton';

interface MerchCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  buyLink: string;
  shopifyProductId?: string; // New prop for Shopify integration
}

const MerchCard: React.FC<MerchCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  price, 
  buyLink,
  shopifyProductId 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-80 bg-rev-brown flex justify-center items-center p-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-rev-brown">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-rev-orange">{price}</span>
          
          {shopifyProductId ? (
            <ShopifyBuyButton 
              productId={shopifyProductId} 
              buttonText="Buy Now"
            />
          ) : (
            <a 
              href={buyLink} 
              className="bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
            >
              <ShoppingBag className="mr-2" size={18} />
              Buy Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchCard;