import ky, { HTTPError } from "ky-universal";
import { useQuery } from "@tanstack/react-query";

import { Product } from "@prisma/client";

const fetchProducts = async (): Promise<Product[]> => {
  return await ky("http://localhost:3000/api/products").json();
};

const useProducts = () => {
  return useQuery<Product[], HTTPError>({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    initialData: [],
  });
};

export { useProducts, fetchProducts };
