import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '../hooks';
import { LoginData } from '../types';

import { Paper } from '@/shared/components';
import { Button, Input } from '@/shared/ui';

export const LoginForm: FC = () => {
  const loginController = useLogin();
  const { register, handleSubmit } = useForm<LoginData>();

  return (
    <Paper className="p-5">
      <form onSubmit={handleSubmit(data => loginController.mutate(data))}>
        <div className="text-2xl text-center font-bold uppercase mb-3">
          Вход
        </div>
        <div className={'flex flex-col gap-3'}>
          <Input
            variant="underline"
            label="Почта"
            required={true}
            placeholder={'example@gmail.com'}
            {...register('email')}
          />
          <Input
            variant="underline"
            label="Пароль"
            type="password"
            required={true}
            {...register('password')}
          />
        </div>
        <Button
          type={'submit'}
          className="w-full mt-8 h-9"
          loading={loginController.isLoading}
        >
          Авторизоваться
        </Button>
      </form>
    </Paper>
  );
};
