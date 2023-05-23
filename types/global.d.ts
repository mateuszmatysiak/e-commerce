declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    NEXTAUTH_SECRET: string;
    STRIPE_SECRET_KEY: string;
    DATEBASE_URL: string;
  }
}
