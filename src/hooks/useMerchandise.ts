import { useState, useEffect } from 'react';
import type { MerchandiseItem } from '../types';

export function useMerchandise() {
  const [merchandise, setMerchandise] = useState<MerchandiseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMerchandise = async () => {
      try {
        // Use dynamic imports with glob pattern
        const modules = import.meta.glob('../data/merchandise/*.json', { eager: true });
        const items: MerchandiseItem[] = Object.values(modules).map((mod: any, idx) => ({
          id: mod.id || `merch-${idx + 1}`,
          title: mod.title,
          description: mod.description,
          price: mod.price,
          image: mod.image,
          buyLink: mod.buyLink,
          shopifyProductId: mod.shopifyProductId || undefined
        }));
        
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