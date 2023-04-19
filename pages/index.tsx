import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { ProductList } from "@/features/Product/components/ProductList";
import { fetchProductList, useProductList } from "@/features/Product/hooks/useProductList";
import { EmptyPage } from "@/shared/components/EmptyPage";
import { ErrorPage } from "@/shared/components/ErrorPage";

export default function ProductListPage() {
  const { data: products, error } = useProductList();

  if (error) return <ErrorPage>{error.message}</ErrorPage>;

  if (!products) return <EmptyPage>Nie znaleziono produktów</EmptyPage>;

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
