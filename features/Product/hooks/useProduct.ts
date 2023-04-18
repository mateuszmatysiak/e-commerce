import type Prisma from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";
import { useRouter } from "next/router";

import { getQueryAsString } from "@/shared/utils/query";

const fetchProduct = async (productId: string): Promise<Prisma.Product> => {
  return await ky(`http://localhost:3000/api/product?id=${productId}`).json();
};

const useProduct = () => {
  const { query } = useRouter();

  const productId = getQueryAsString(query.productId);

  return useQuery<Prisma.Product, HTTPError>({
    queryKey: ["product"],
    queryFn: () => fetchProduct(productId),
  });
};

export { useProduct, fetchProduct };
