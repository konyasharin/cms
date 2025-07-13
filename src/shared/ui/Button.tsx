import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import colors from 'tailwindcss/colors';

import { Loader } from '@/shared/components';

type ButtonVariant = 'outline' | 'filled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variant = 'filled',
  children,
  loading,
  disabled,
  ...attributes
}) => {
  return (
    <button
      {...attributes}
      className={clsx(
        'py-1.5 px-3 rounded cursor-pointer transition text-center flex items-center justify-center disabled:cursor-default',
        {
          'bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-400 disabled:bg-blue-300':
            variant === 'filled',
          'border-2 border-blue-500 hover:bg-blue-500 hover:text-white':
            variant === 'outline',
        },
        attributes.className,
      )}
      disabled={loading || disabled}
    >
      {loading ? <Loader color={colors.white} /> : children}
    </button>
  );
};
