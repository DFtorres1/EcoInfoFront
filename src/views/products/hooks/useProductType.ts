import { useQuery } from "react-query";
import api from "src/utils/api";
import { productCategoryQueryKeys } from "src/utils/queryKeys";

const getProductCategory = async (id?: string): Promise<ProductCategory> => {
  const { data } = await api.get(`/productcategory/${id}`);
  return data;
};

const useProductCategory = (id?: string) => {
  return useQuery<ProductCategory>(
    productCategoryQueryKeys.detail(id ?? 0),
    async () => getProductCategory(id),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!id,
    }
  );
};

export default useProductCategory;
