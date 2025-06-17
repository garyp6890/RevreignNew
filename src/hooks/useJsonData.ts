import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    async () => {
      try {
        // In development, use dynamic imports
        if (import.meta.env.DEV) {
          const module = await import(filePath);
          return module.default || module;
        }
        
        // In production, use fetch with correct path
        const cleanPath = filePath.replace('../data/', '/src/data/');
        const response = await fetch(cleanPath);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${cleanPath}: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Failed to load data:', error);
        throw new Error(`Failed to load data from ${filePath}`);
      }
    },
    [filePath]
  );
}