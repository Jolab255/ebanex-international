/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly DEV: boolean;
  // add other env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
