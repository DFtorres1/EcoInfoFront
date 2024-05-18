import { useQuery, useQueryClient } from "react-query";
import api from "src/utils/api";
import { productCategoryQueryKeys } from "src/utils/queryKeys";

const getProductCategory = async (id?: string): Promise<ProductCategory> => {
  const { data } = await api.get(`/productcategory/${id}`);
  return data;
};

const useProductCategory = (id?: string) => {
  // const queryProductCategory = useQueryClient();

  return useQuery<ProductCategory>(
    productCategoryQueryKeys.detail(id ? +id : 0),
    async () => getProductCategory(id),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!id,
      onSuccess: () => {
        // Do something with the query keys to avoid bad fetching
        //
        // await queryProductCategory.cancelQueries(productCategoryQueryKeys.all);
        // const productDetailsKey = productCategoryQueryKeys.detail(id ? +id : 0);
      },
    }
  );
};

export default useProductCategory;
