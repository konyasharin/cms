import { useState } from 'react';

export const useFetch = <TResponse, TData = undefined>(
  func: (data: TData) => Promise<TResponse>,
) => {
  const [response, setResponse] = useState<TResponse | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const fetch = async (data: TData) => {
    setIsLoading(true);
    try {
      const response = await func(data);
      setResponse(response);
    } catch (e) {
      if (!import.meta.env.PROD) console.error(e);
      setError('Произошла непредвиденная ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: response,
    isLoading,
    error,
    refetch: fetch,
  };
};
