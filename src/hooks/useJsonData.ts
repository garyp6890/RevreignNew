import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    async () => {
      try {
        // Convert relative path to absolute path for fetch
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