import { useQuery } from "@tanstack/react-query";
import { HTTPError } from "ky-universal";

import { type Product } from "@app/database";
import { fetcher } from "@app/utils";

const fetchProductList = async () => {
  return await fetcher<Product[]>(`/api/productList`);
};

const useProductList = () => {
  return useQuery<Product[], HTTPError>({
    queryKey: ["productList"],
    queryFn: () => fetchProductList(),
  });
};

export { useProductList, fetchProductList };
