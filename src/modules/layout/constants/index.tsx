import { ReactNode } from 'react';

import { NavbarItem } from '../types';

import { APP_PATHS } from '@/shared';

export const HEADER_HEIGHT = 80;
export const HEADER_BOTTOM_SPACE = 15;

export const NAVBAR_WIDTH = 400;
export const NAVBAR_RIGHT_SPACE = 15;

export const LAYOUT_BASE_SPACE = 10;

export const HEADER_ITEMS: ReactNode[] = [<div>123</div>, <div>124</div>];

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    text: 'Главная',
    path: APP_PATHS.index,
  },
  {
    text: '404',
    path: APP_PATHS.notFound,
  },
];
