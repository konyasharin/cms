import { useFetch } from './useFetch';

export const useMutation = <TResponse, TData>(
  func: (data: TData) => Promise<TResponse>,
) => {
  const controller = useFetch(func);

  const mutate = (data: TData) => {
    controller.refetch(data);
  };

  return {
    ...controller,
    mutate,
  };
};
