import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface PaperProps {
  className?: string;
  children?: ReactNode;
}

export const Paper: FC<PaperProps> = props => {
  return (
    <div className={clsx('bg-white shadow p-3 rounded', props.className)}>
      {props.children}
    </div>
  );
};
