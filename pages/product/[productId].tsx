import { QueryClient, dehydrate } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";

import { useCheckoutContext } from "@/features/Checkout/hooks/useCheckoutContext";
import { formatCurrency } from "@/features/Product/components/Product";
import { fetchProduct, useProduct } from "@/features/Product/hooks/useProduct";
import { Button } from "@/shared/components/Button";
import { getQueryAsString } from "@/shared/utils/query";

export default function ProductPage() {
  const { query } = useRouter();
  const productId = getQueryAsString(query.productId);

  const { data: product, error } = useProduct();
  const { dispatch } = useCheckoutContext();

  if (error) return <div className="text-xl text-gray-600 dark:text-gray-400">{error.message}</div>;

  if (!product)
    return (
      <div className="text-xl text-gray-600 dark:text-gray-400">
        Nie znaleziono produktu o id: {productId}
      </div>
    );

  const { image, name, description, price } = product;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="h-96 relative rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain bg-white"
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{name}</h2>
        <p className="text-gray-600 font-light line-clamp-6 dark:text-gray-400">{description}</p>
        <span>{formatCurrency(price)}</span>

        <Button onClick={() => dispatch({ type: "addProduct", product })} className="mt-auto">
          Dodaj do koszyka
        </Button>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = getQueryAsString(params?.productId);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["product"], { queryFn: () => fetchProduct(productId) });

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
