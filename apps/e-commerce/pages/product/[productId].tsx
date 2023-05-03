import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";

import { ProductDetails, fetchProductDetails, useProductDetails } from "@app/features-product";
import { EmptyPage, ErrorPage, getQueryAsString } from "@app/ui";

export default function ProductPage() {
  const { query } = useRouter();
  const { data: product, error } = useProductDetails();

  const productId = getQueryAsString(query.productId);

  if (error) return <ErrorPage>{error.message}</ErrorPage>;

  if (!product) return <EmptyPage>{`Nie znaleziono produktu o id: ${productId}`}</EmptyPage>;

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
