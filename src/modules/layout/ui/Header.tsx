import { FC } from 'react';

import { HEADER_ITEMS } from '../constants';
import { useLayoutStore } from '../store';

export const Header: FC = () => {
  const { headerHeight, navbarWidth } = useLayoutStore();

  return (
    <div
      className={'w-full fixed top-0 right-0'}
      style={{ height: headerHeight }}
    >
      <div
        className={
          'flex justify-end items-center h-full gap-5 px-10 border-b border-gray-500 bg-white'
        }
        style={{ marginLeft: navbarWidth }}
      >
        {HEADER_ITEMS.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};
