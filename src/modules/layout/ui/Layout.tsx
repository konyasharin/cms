import { FC, ReactNode } from 'react';

import {
  HEADER_BOTTOM_SPACE,
  LAYOUT_BASE_SPACE,
  NAVBAR_RIGHT_SPACE,
} from '../constants';
import { useLayoutStore } from '../store';

import { Header } from './Header.tsx';
import { Navbar } from './Navbar.tsx';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = props => {
  const layoutStore = useLayoutStore();

  return (
    <div>
      <Header />
      <Navbar />
      <div
        style={{
          marginTop:
            layoutStore.headerHeight +
              (layoutStore.headerHeight && HEADER_BOTTOM_SPACE) ||
            LAYOUT_BASE_SPACE,
          marginLeft:
            layoutStore.navbarWidth +
              (layoutStore.navbarWidth && NAVBAR_RIGHT_SPACE) ||
            LAYOUT_BASE_SPACE,
          marginRight: LAYOUT_BASE_SPACE,
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
