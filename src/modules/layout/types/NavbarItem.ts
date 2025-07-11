import { ElementType } from 'react';
import { IconType } from 'react-icons';

export interface NavbarItem {
  text: string;
  path: string;
  icon: ElementType<Parameters<IconType>[0]>;
}
