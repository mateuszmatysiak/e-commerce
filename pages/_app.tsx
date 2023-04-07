import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

import { AppLayout } from "@/components/Layout/AppLayout";
import { FontWrapper } from "@/components/Layout/FontWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { pathname } = useRouter();

  const isAuthPath = pathname.includes("/auth");

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <FontWrapper>
              {isAuthPath ? (
                <Component {...pageProps} />
              ) : (
                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              )}
            </FontWrapper>
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
