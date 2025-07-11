/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_FIREBASE_API_KEY: string;
  readonly APP_FIREBASE_PROJECT_ID: string;
  readonly APP_FIREBASE_SENDER_ID: string;
  readonly APP_FIREBASE_APP_ID: string;
  readonly APP_FIREBASE_MEASUREMENT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
