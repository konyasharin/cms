import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constants';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {ROUTES.map(route => {
        return <Route element={route.element} path={route.path} />;
      })}

      <Route path={'*'} element={<div>not-found</div>} />
    </Routes>
  );
};
