import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    async () => {
      try {
        // Try dynamic import first (works in development and production)
        const module = await import(filePath);
        return module.default || module;
      } catch (error) {
        console.error('Failed to load data:', error);
        throw new Error(`Failed to load data from ${filePath}`);
      }
    },
    [filePath]
  );
}