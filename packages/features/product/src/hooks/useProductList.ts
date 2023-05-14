import { useQuery } from "@tanstack/react-query";
import ky, { HTTPError } from "ky-universal";

import { type Product } from "@app/database";

const fetchProductList = async (): Promise<Product[]> => {
  return await ky(`/api/productList`).json();
};

const useProductList = () => {
  return useQuery<Product[], HTTPError>({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });
};

export { useProductList, fetchProductList };
