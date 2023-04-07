import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignInPage({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="flex justify-center items-center bg-slate-900 h-screen">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-blue-600 px-8 py-4 rounded-md hover:bg-blue-700"
            onClick={() => signIn(provider.id)}
          >
            Zaloguj się przy użyciu {provider.name}
          </button>
        </div>
      ))}
    </main>
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
