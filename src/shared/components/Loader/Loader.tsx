import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import clsx from 'clsx';

import './styles.css';

import { setCssVar } from '@/shared/utils';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Loader: FC<LoaderProps> = ({
  color,
  className,
  ...attributes
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (color && ref.current)
      setCssVar(
        '--color',
        `no-repeat linear-gradient(${color} 0 0)`,
        ref.current,
      );
  }, [color]);

  return (
    <div
      {...attributes}
      className={clsx('loader h-full', className)}
      ref={ref}
    />
  );
};
