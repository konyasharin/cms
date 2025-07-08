import { ROLES } from '@/modules';

import { Route } from '../types';

import { APP_PATHS } from '@/shared';

export const ROUTES: Readonly<Route[]> = [
  {
    path: APP_PATHS.index,
    element: <div>123</div>,
    availableFor: [ROLES.admin, ROLES.unauthorized],
  },
];
