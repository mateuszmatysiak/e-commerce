import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useState } from "react";

import { CheckoutContextProvider } from "@app/features-checkout";
import { AppLayout } from "@app/features-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <QueryClientProvider client={queryClient}>
          <CheckoutContextProvider>
            <Hydrate state={pageProps.dehydratedState}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </Hydrate>
            <ReactQueryDevtools />
          </CheckoutContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
