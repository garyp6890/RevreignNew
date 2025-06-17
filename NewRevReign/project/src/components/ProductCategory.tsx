import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  link: string;
}

interface ProductCategoryProps {
  title: string;
  description: string;
  link?: string;
  products: Product[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, description, link, products }) => {
  return (
    <div className="mb-12">
      {link ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block"
        >
          <h2 className="text-2xl font-bold text-rev-brown mb-2 font-heading group-hover:text-rev-orange transition-colors inline-flex items-center">
            {title}
            <ExternalLink size={20} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h2>
        </a>
      ) : (
        <h2 className="text-2xl font-bold text-rev-brown mb-2 font-heading">{title}</h2>
      )}
      <p className="text-gray-700 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-rev-orange">{product.price}</span>
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-rev-brown hover:bg-rev-dark text-white py-1 px-3 rounded flex items-center text-sm transition-colors"
                >
                  View
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;