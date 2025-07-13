import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { Layout } from '@/modules/layout';

import { AppRoutes } from '../routing';

import './style.css';

const App: FC = () => {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;
