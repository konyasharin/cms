import { create } from 'zustand/react';

import { HEADER_HEIGHT, NAVBAR_WIDTH } from '../constants';

interface LayoutStore {
  headerHeight: number;
  navbarWidth: number;
  hideNavbar: () => void;
  hideHeader: () => void;
  showHeader: () => void;
  showNavbar: () => void;
}

export const useLayoutStore = create<LayoutStore>(set => ({
  headerHeight: HEADER_HEIGHT,
  navbarWidth: NAVBAR_WIDTH,
  hideHeader: () => set(() => ({ headerHeight: 0 })),
  hideNavbar: () => set(() => ({ navbarWidth: 0 })),
  showHeader: () => set(() => ({ headerHeight: HEADER_HEIGHT })),
  showNavbar: () => set(() => ({ navbarWidth: NAVBAR_WIDTH })),
}));
