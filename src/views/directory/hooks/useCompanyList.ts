import { useQuery } from "react-query";
import api from "src/utils/api";
import { companyQueryKeys } from "src/utils/queryKeys";

const getCompanyList = async (): Promise<Company[]> => {
  const { data } = await api.get("/company");
  return data;
};

const useCompanyList = () => {
  return useQuery<Company[]>(
    companyQueryKeys.details(),
    async () => getCompanyList(),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
    }
  );
};

export default useCompanyList
