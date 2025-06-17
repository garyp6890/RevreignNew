import { useState, useEffect } from 'react';
import type { MerchandiseItem } from '../types';

export function useMerchandise() {
  const [merchandise, setMerchandise] = useState<MerchandiseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMerchandise = async () => {
      try {
        // For production, we'll use the static data since dynamic imports don't work with JSON
        const staticMerchandise: MerchandiseItem[] = [
          {
            id: "caveman-mechanics",
            title: "Caveman Mechanics T-shirt",
            description: "Soft and durable tee with the iconic Caveman Mechanics design featuring our mascot with thumbs up and \"MECH-AN-ICS\" lettering. Perfect for garage days!",
            price: "$29.99",
            image: "/images/caveman-race-team-brown.webp",
            buyLink: "https://example.com/buy-caveman-mechanics",
            shopifyProductId: undefined
          },
          {
            id: "caveman-race-team",
            title: "Caveman Race Team T-shirt",
            description: "Premium cotton tee featuring our signature Caveman Race Team logo with the classic \"UGGA DUGGA\" car repair catchphrase. Available in multiple sizes.",
            price: "$29.99",
            image: "/images/rev3.png",
            buyLink: "https://example.com/buy-caveman-race",
            shopifyProductId: undefined
          }
        ];
        
        setMerchandise(staticMerchandise);
        setError(null);
      } catch (err) {
        setError('Failed to load merchandise');
        setMerchandise([]);
      } finally {
        setLoading(false);
      }
    };

    loadMerchandise();
  }, []);

  return { merchandise, loading, error };
}