import { useState, useEffect } from 'react';
import type { MerchandiseItem } from '../types';

export function useMerchandise() {
  const [merchandise, setMerchandise] = useState<MerchandiseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMerchandise = async () => {
      try {
        // Try to load merchandise files directly
        const merchandiseFiles = [
          '/src/data/merchandise/caveman-mechanics.json',
          '/src/data/merchandise/caveman-race-team.json'
        ];

        const items: MerchandiseItem[] = [];
        
        for (const filePath of merchandiseFiles) {
          try {
            const response = await fetch(filePath);
            if (response.ok) {
              const data = await response.json();
              items.push({
                id: data.id || `merch-${items.length + 1}`,
                title: data.title,
                description: data.description,
                price: data.price,
                image: data.image,
                buyLink: data.buyLink,
                shopifyProductId: data.shopifyProductId || undefined
              });
            }
          } catch (fileError) {
            console.warn(`Failed to load ${filePath}:`, fileError);
          }
        }

        // Fallback: try dynamic imports for development
        if (items.length === 0) {
          try {
            const modules = import.meta.glob('../data/merchandise/*.json', { eager: true });
            const fallbackItems: MerchandiseItem[] = Object.values(modules).map((mod: any, idx) => ({
              id: mod.id || `merch-${idx + 1}`,
              title: mod.title,
              description: mod.description,
              price: mod.price,
              image: mod.image,
              buyLink: mod.buyLink,
              shopifyProductId: mod.shopifyProductId || undefined
            }));
            items.push(...fallbackItems);
          } catch (globError) {
            console.warn('Glob import failed:', globError);
          }
        }
        
        setMerchandise(items);
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