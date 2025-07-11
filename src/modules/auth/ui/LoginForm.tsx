import { FC } from 'react';

import { useLogin } from '../hooks';

export const LoginForm: FC = () => {
  const loginController = useLogin();

  return (
    <button
      onClick={() =>
        loginController.mutate({
          email: 'kolechka.malyshev.043@gmail.com',
          password: '23dsssfd22',
        })
      }
    >
      123
    </button>
  );
};
