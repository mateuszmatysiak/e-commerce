import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";
import { useRouter } from "next/router";

import { type Product } from "@app/database";
import { getQueryAsString } from "@app/utils";

const fetchProductDetails = async (productId: string): Promise<Product> => {
  return await ky(`/api/productDetails?id=${productId}`).json();
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
