import { FC } from 'react';

import { HEADER_BOTTOM_SPACE, NAVBAR_ITEMS } from '../constants';
import { useLayoutStore } from '../store';

import { NavbarItem } from './NavbarItem';

export const Navbar: FC = () => {
  const { navbarWidth, headerHeight } = useLayoutStore();

  return (
    <div
      className={
        'h-screen bg-gradient-to-tl from-blue-500 to-blue-700 fixed top-0 left-0'
      }
      style={{ width: navbarWidth }}
    >
      <div
        className={'flex flex-col gap-5 pl-4'}
        style={{ paddingTop: headerHeight + HEADER_BOTTOM_SPACE }}
      >
        {NAVBAR_ITEMS.map(item => (
          <NavbarItem {...item} key={item.path} />
        ))}
      </div>
    </div>
  );
};
