import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    async () => {
      try {
        // Use fetch for both development and production
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