import { useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky-universal";
import { useRouter } from "next/router";

import { type Product } from "@app/database";
import { fetcher, getQueryAsString } from "@app/utils";

const fetchProductDetails = async (productId: string) => {
  return await fetcher<Product>(`/api/productDetails?id=${productId}`);
};

const useProductDetails = () => {
  const { query } = useRouter();

  const productId = getQueryAsString(query.productId);

  return useQuery<Product, HTTPError>({
    queryKey: ["productDetails"],
    queryFn: () => fetchProductDetails(productId),
  });
};

export { useProductDetails, fetchProductDetails };
