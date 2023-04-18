import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import { Products } from "@/features/Product/components/Products";
import { fetchProducts, useProducts } from "@/features/Product/hooks/useProducts";

export default function HomePage() {
  const { data: products, error } = useProducts();

  if (error) return <div className="text-xl text-gray-600 dark:text-gray-400">{error.message}</div>;

  return (
    <>
      <Head>
        <title>Sklep internetowy</title>
        <meta name="description" content="Sklep internetowy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products products={products} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], fetchProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
