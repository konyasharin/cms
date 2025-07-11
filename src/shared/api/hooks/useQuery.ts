import { useEffect } from 'react';

import { useFetch } from './useFetch';

export const useQuery = <TResponse>(func: () => Promise<TResponse>) => {
  const controller = useFetch(func);

  useEffect(() => {
    controller.refetch(undefined);
  }, []);

  return controller;
};
