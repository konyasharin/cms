import { FirebaseError } from '@firebase/util';

export const isErrorMatchCondition = (
  errorInfo: FirebaseError | undefined,
  condition: (code: string) => boolean,
) => {
  return !!errorInfo && condition(errorInfo.code);
};
