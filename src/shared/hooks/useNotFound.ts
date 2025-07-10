import { useNavigate } from 'react-router-dom';

import { APP_PATHS } from '../constants';

export const useNotFound = () => {
  const navigate = useNavigate();

  const navigateToNotFound = () => {
    navigate(APP_PATHS.notFound);
  };

  return navigateToNotFound;
};
