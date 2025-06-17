import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    async () => {
      // Remove the '../' prefix and construct the correct path
      const cleanPath = filePath.replace('../', '/src/');
      
      try {
        // Try to fetch the JSON file directly
        const response = await fetch(cleanPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${cleanPath}: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        // Fallback: try dynamic import for development
        try {
          const module = await import(filePath);
          return module.default || module;
        } catch (importError) {
          console.error('Failed to load data:', error, importError);
          throw new Error(`Failed to load data from ${filePath}`);
        }
      }
    },
    [filePath]
  );
}