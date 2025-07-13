import { AuthApi } from '../api';
import { isAuthError } from '../utils';

import { useMutation } from '@/shared/api';
import { useNotify } from '@/shared/hooks';

export const useLogin = () => {
  const controller = useMutation(AuthApi.loginWithEmailAndPassword);

  useNotify([
    {
      type: 'error',
      message: 'Неверный email или пароль',
      on: isAuthError(controller.errorInfo),
    },
  ]);

  return controller;
};
