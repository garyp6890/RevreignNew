import React, { useEffect, useRef } from 'react';

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
    
    // For now, just create a simple fallback button since Shopify client might not be available
    const fallbackButton = document.createElement('button');
    fallbackButton.className = className;
    fallbackButton.textContent = buttonText;
    fallbackButton.onclick = () => {
      // Open a generic store link or the provided product link
      window.open(`https://your-store-name.myshopify.com/products/${productId}`, '_blank');
    };
    
    if (buttonRef.current.firstChild) {
      buttonRef.current.innerHTML = '';
    }
    
    buttonRef.current.appendChild(fallbackButton);

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