import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticProps } from "next";
import Head from "next/head";

import { ProductItem } from "@/components/ProductItem";
import { fetchProducts, useProducts } from "@/hooks/useProducts";

export default function HomePage() {
  const { data: products } = useProducts();

  // TODO: Error state

  return (
    <>
      <Head>
        <title>E-Commerce NextJS App</title>
        <meta name="description" content="eCommerce NextJS App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="grid grid-cols-5">
        {products.map((product) => {
          return <ProductItem key={product.id} {...product} />;
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
