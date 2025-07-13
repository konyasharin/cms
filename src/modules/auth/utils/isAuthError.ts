import { FirebaseError } from '@firebase/util';

import { isErrorMatchCondition } from '@/shared/api';

export const isAuthError = (errorInfo?: FirebaseError) => {
  return isErrorMatchCondition(errorInfo, code => code.startsWith('auth/'));
};
