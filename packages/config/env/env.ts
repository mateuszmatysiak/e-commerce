type EnviromentVariables = {
  readonly NODE_ENV: "production" | "development";
  readonly NEXTAUTH_URL: string;
  readonly NEXTAUTH_SECRET: string;
  readonly GOOGLE_ID: string;
  readonly GOOGLE_SECRET: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
  readonly DATABASE_URL: string;
};
type EnviromentVariableKeys = keyof EnviromentVariables;

export function getEnv(name: EnviromentVariableKeys): EnviromentVariables[EnviromentVariableKeys] {
  const environmentVariable = process.env[name];

  if (!environmentVariable) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return environmentVariable;
}
