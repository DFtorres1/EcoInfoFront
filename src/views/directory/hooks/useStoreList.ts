import { useQuery } from "react-query";
import api from "src/utils/api";
import { storeQueryKeys } from "src/utils/queryKeys";

const getStoreList = async (): Promise<Store[]> => {
  const { data } = await api.get("/store");
  return data;
};

const useStoreList = () => {
  return useQuery<Store[]>(
    storeQueryKeys.details(),
    async () => getStoreList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useStoreList
