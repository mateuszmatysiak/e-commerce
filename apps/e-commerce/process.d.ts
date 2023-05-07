declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    STRIPE_SECRET_KEY: string;
  }
}
