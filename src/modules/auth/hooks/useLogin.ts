import { AuthApi } from '../api';

import { useMutation } from '@/shared/api';

export const useLogin = () => {
  const controller = useMutation(AuthApi.loginWithEmailAndPassword);
  return controller;
};
