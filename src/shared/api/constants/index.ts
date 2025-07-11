import { FirebaseOptions } from 'firebase/app';

export const FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: import.meta.env.APP_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.APP_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.APP_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: import.meta.env.APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.APP_FIREBASE_MEASUREMENT_ID,
};
