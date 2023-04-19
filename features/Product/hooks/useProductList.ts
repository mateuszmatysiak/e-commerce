import type Prisma from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";

const fetchProductList = async (): Promise<Prisma.Product[]> => {
  return await ky("http://localhost:3000/api/productList").json();
};

const useProductList = () => {
  return useQuery<Prisma.Product[], HTTPError>({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });
};

export { useProductList, fetchProductList };
