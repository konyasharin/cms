import { ReactNode } from 'react';
import { FaHome } from 'react-icons/fa';
import { TbError404 } from 'react-icons/tb';

import { NavbarItem } from '../types';

import { APP_PATHS } from '@/shared/constants';

export const HEADER_HEIGHT = 80;
export const HEADER_BOTTOM_SPACE = 15;

export const NAVBAR_WIDTH = 250;
export const NAVBAR_RIGHT_SPACE = 15;

export const LAYOUT_BASE_SPACE = 10;

export const HEADER_ITEMS: ReactNode[] = [<div>123</div>, <div>124</div>];

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    text: 'Главная',
    path: APP_PATHS.index,
    icon: FaHome,
  },
  {
    text: '404',
    path: APP_PATHS.notFound,
    icon: TbError404,
  },
];
