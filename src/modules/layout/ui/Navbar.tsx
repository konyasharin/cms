import { FC } from 'react';
import { Link } from 'react-router-dom';

import { NAVBAR_ITEMS } from '@/modules/layout/constants';

import { useLayoutStore } from '../store';

export const Navbar: FC = () => {
  const { navbarWidth } = useLayoutStore();

  return (
    <div
      className={
        'h-screen bg-blue-800 fixed top-0 left-0 border-r border-gray-500'
      }
      style={{ width: navbarWidth }}
    >
      <div className={'flex flex-col gap-5'}>
        {NAVBAR_ITEMS.map(item => (
          <Link to={item.path}>{item.text}</Link>
        ))}
      </div>
    </div>
  );
};
