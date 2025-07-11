import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { NavbarItem as NavbarItemProps } from '../types';

export const NavbarItem: FC<NavbarItemProps> = props => {
  return (
    <NavLink to={props.path} className={'w-fit'}>
      {({ isActive }) => (
        <div
          className={clsx('flex gap-3 items-center text-xl transition', {
            'scale-110 stroke-gray-100 text-gray-100 active:scale-100':
              isActive,
            'scale-100 stroke-gray-400 text-gray-400 hover:text-gray-200 hover:stroke-gray-200 hover:scale-110 active:scale-90':
              !isActive,
          })}
        >
          <props.icon size={28} />
          <span>{props.text}</span>
        </div>
      )}
    </NavLink>
  );
};
