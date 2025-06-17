import { useState, useEffect } from 'react';

interface UseAsyncDataState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsyncData<T>(
  dataLoader: () => Promise<T>,
  deps: React.DependencyList = []
): UseAsyncDataState<T> {
  const [state, setState] = useState<UseAsyncDataState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const result = await dataLoader();
        
        if (isMounted) {
          setState({ data: result, loading: false, error: null });
        }
      } catch (err) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : 'An error occurred',
          });
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, deps);

  return state;
}