interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly VITE_APP_TITLE: string;
    readonly NODE_ENV: string;
    readonly HOST: string;
  }
  
  // eslint-disable-next-line no-unused-vars
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  