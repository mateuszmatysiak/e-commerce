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
        <title>Sklep internetowy</title>
        <meta name="description" content="Sklep internetowy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
