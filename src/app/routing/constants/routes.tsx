import { LoginForm, ROLES } from '@/modules/auth';

import { Route } from '../types';

import { APP_PATHS } from '@/shared/constants';

export const ROUTES: Readonly<Route[]> = [
  {
    path: APP_PATHS.index,
    element: <LoginForm />,
    availableFor: [ROLES.admin, ROLES.unauthorized],
  },
];
