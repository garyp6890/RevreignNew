import { useAsyncData } from './useAsyncData';

export function useJsonData<T>(filePath: string) {
  return useAsyncData<T>(
    () => import(filePath).then(module => module.default || module),
    [filePath]
  );
}