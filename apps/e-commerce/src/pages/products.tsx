import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { ProductList, fetchProductList, useProductList } from "@app/features-product";
import { EmptyPage, ErrorPage } from "@app/ui";

export default function ProductListPage() {
  const { data: products, error } = useProductList();

  if (error) return <ErrorPage>{error.message}</ErrorPage>;

  if (!products) return <EmptyPage>Ładowanie...</EmptyPage>;

  return (
    <>
      <Head>
        <title>Produkty</title>
        <meta name="description" content="Produkty w sklepie internetowym" />
      </Head>

      <div className="mb-16 flex flex-col gap-8 border-b border-b-gray-200 pb-16 pt-8 dark:border-b-slate-800">
        <div className="relative flex min-h-[30vh] items-center text-center md:px-6">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl">Twój portal do sprzedaży i wymiany ubrań</h1>

            <p className="text-2xl">
              Innowacyjny sklep internetowy, który umożliwia ludziom wystawianie, sprzedaż i wymianę
              swoich ubrań. Znajdziesz tu różnorodne ubrania, od luksusowych marek po unikalne i
              ekologiczne projekty.
            </p>
          </div>
        </div>
      </div>

      <ProductList products={products} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["productList"], fetchProductList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
