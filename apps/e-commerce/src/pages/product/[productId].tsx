import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";

import { ProductDetails, fetchProductDetails, useProductDetails } from "@app/features-product";
import { EmptyPage, ErrorPage } from "@app/ui";
import { getQueryAsString } from "@app/utils";

export default function ProductPage() {
  const { data: product, error } = useProductDetails();

  if (error) return <ErrorPage>{error.message}</ErrorPage>;

  if (!product) return <EmptyPage>Ładowanie...</EmptyPage>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={`Produkt: ${product.name}`} />
      </Head>
      <ProductDetails product={product} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = getQueryAsString(params?.productId);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["productDetails"], {
    queryFn: () => fetchProductDetails(productId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
