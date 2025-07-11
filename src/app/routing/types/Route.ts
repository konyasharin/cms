import { ReactNode } from 'react';

import { ROLES } from '@/modules/auth';

export interface Route {
  path: string;
  element: ReactNode;
  availableFor: (keyof typeof ROLES)[];
  layout?: {
    withinNavbar?: boolean;
    withinFooter?: boolean;
    withinHeader?: boolean;
  };
}
