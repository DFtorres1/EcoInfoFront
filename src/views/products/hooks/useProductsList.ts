import { useQuery } from "react-query";
import api from "src/utils/api";
import { productQueryKeys } from "src/utils/queryKeys";

const getProductList = async (): Promise<Product[]> => {
  const { data } = await api.get("/product");
  return data;
};

const useProductsList = () => {
  return useQuery<Product[]>(
    productQueryKeys.details(),
    async () => getProductList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useProductsList;
