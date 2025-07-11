import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { LoginData } from '../types';

import { Firebase } from '@/shared/api';

export class AuthApi {
  public static registerWithEmailAndPassword = async (
    data: LoginData,
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(
      Firebase.Auth,
      data.email,
      data.password,
    );
  };

  public static loginWithEmailAndPassword = async (
    data: LoginData,
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(Firebase.Auth, data.email, data.password);
  };

  public static logout = async (): Promise<void> => {
    return signOut(Firebase.Auth);
  };
}
