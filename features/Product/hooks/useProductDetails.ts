import type Prisma from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";
import { useRouter } from "next/router";

import { getQueryAsString } from "@/shared/utils/query";

const fetchProductDetails = async (productId: string): Promise<Prisma.Product> => {
  return await ky(`http://localhost:3000/api/productDetails?id=${productId}`).json();
};

const useProductDetails = () => {
  const { query } = useRouter();

  const productId = getQueryAsString(query.productId);

  return useQuery<Prisma.Product, HTTPError>({
    queryKey: ["productDetails"],
    queryFn: () => fetchProductDetails(productId),
  });
};

export { useProductDetails, fetchProductDetails };
