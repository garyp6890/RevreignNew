import React, { useEffect, useRef } from 'react';
import shopifyClient from '../utils/shopify';

interface ShopifyBuyButtonProps {
  productId: string;
  buttonText?: string;
  className?: string;
}

const ShopifyBuyButton: React.FC<ShopifyBuyButtonProps> = ({ 
  productId, 
  buttonText = 'Buy Now',
  className = "bg-rev-orange hover:bg-rev-yellow text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonRef.current || !productId) return;
    
    // Clean up any existing button
    if (buttonRef.current.firstChild) {
      buttonRef.current.innerHTML = '';
    }

    // Load product and create UI
    shopifyClient.product.fetch(productId)
      .then((product) => {
        if (!buttonRef.current) return;
        
        const ui = shopifyClient.ui.createComponent('product', {
          id: product.id,
          node: buttonRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D', // "${{amount}}"
          options: {
            product: {
              buttonDestination: 'checkout',
              contents: {
                img: false,
                title: false,
                price: false,
                description: false,
                button: true,
                quantity: false,
              },
              text: {
                button: buttonText
              },
              styles: {
                button: {
                  "background-color": "var(--rev-orange)",
                  "color": "white",
                  "font-weight": "bold",
                  "padding": "0.5rem 1rem",
                  "border-radius": "0.25rem",
                  "transition": "background-color 0.3s ease",
                  ":hover": {
                    "background-color": "var(--rev-yellow)"
                  }
                }
              }
            }
          }
        });

        // Render the UI
        ui.init();
      })
      .catch(error => {
        console.error('Error loading Shopify product:', error);
        
        // Fallback button if product loading fails
        if (buttonRef.current) {
          const fallbackButton = document.createElement('button');
          fallbackButton.className = className;
          fallbackButton.textContent = buttonText;
          fallbackButton.onclick = () => window.open(`https://your-store-name.myshopify.com/products/${productId}`, '_blank');
          
          buttonRef.current.appendChild(fallbackButton);
        }
      });

    return () => {
      // Clean up
      if (buttonRef.current) {
        buttonRef.current.innerHTML = '';
      }
    };
  }, [productId, buttonText, className]);

  return <div ref={buttonRef} className="shopify-buy-button"></div>;
};

export default ShopifyBuyButton;