import { FC } from 'react';

import { Layout } from '@/modules/layout';

import { AppRoutes } from '../routing';

import './style.css';

const App: FC = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
