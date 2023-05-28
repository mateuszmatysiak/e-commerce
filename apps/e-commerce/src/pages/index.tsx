import { QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";
import { GetStaticProps } from "next/types";

import {
  ProductList,
  ProductSlider,
  fetchProductList,
  useProductList,
} from "@app/features-product";
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

      <div className="flex flex-col gap-8">
        <div className="relative flex min-h-[50vh] items-center text-center md:px-6">
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-5xl">Wygodne zakupy online zawsze pod ręką</h1>

            <p className="text-2xl">
              Zapraszamy do naszego sklepu internetowego, gdzie czeka na Ciebie szeroki wybór
              produktów, konkurencyjne ceny i wygodne zakupy online.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24">
          <div>
            <h2 className="text-3xl">Popularne produkty</h2>

            <ProductSlider products={products} className="py-4" />
          </div>

          <div>
            <h2 className="text-3xl">Pozostałe produkty</h2>

            <ProductList products={products} className="py-4" />
          </div>
        </div>
      </div>
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
