import type Prisma from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";

const fetchProducts = async (): Promise<Prisma.Product[]> => {
  return await ky("http://localhost:3000/api/products").json();
};

const useProducts = () => {
  return useQuery<Prisma.Product[], HTTPError>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    initialData: [],
  });
};

export { useProducts, fetchProducts };
