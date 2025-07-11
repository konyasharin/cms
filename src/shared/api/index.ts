import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { FIREBASE_CONFIG } from './constants';

export { useMutation, useQuery } from './hooks';
export class Firebase {
  public static readonly App = initializeApp(FIREBASE_CONFIG);
  public static readonly Auth = getAuth(Firebase.App);
}
