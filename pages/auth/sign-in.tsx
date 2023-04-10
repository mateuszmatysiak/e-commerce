import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Button } from "@/shared/components/Button";

interface SignInPageProps extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function SignInPage({ providers }: SignInPageProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {Object.values(providers).map((provider) => (
        <Button key={provider.name} onClick={() => signIn(provider.id)}>
          Zaloguj się przy użyciu {provider.name}
        </Button>
      ))}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
