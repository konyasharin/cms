import { useState } from 'react';
import { FirebaseError } from '@firebase/util';

import { BASE_ERROR } from '../constants';

import { notify } from '@/shared/utils';

export const useFetch = <TResponse, TData = undefined>(
  func: (data: TData) => Promise<TResponse>,
) => {
  const [response, setResponse] = useState<TResponse | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState<FirebaseError | undefined>();

  const fetch = async (data: TData) => {
    setIsLoading(true);
    try {
      const response = await func(data);
      setResponse(response);
    } catch (e) {
      if (e instanceof FirebaseError) {
        setErrorInfo(e);
      } else {
        notify({ type: 'error', message: BASE_ERROR });
      }
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: response,
    isLoading,
    refetch: fetch,
    errorInfo,
  };
};
