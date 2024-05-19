import { useQuery } from "react-query";
import api from "src/utils/api";
import { companyTypeQueryKeys } from "src/utils/queryKeys";

const getCompanyType = async (id?: string): Promise<CompanyType> => {
  const { data } = await api.get(`/companytype/${id}`);
  return data;
};

const useCompanyType = (id?: string) => {
  return useQuery<CompanyType>(
    companyTypeQueryKeys.detail(id ?? 0),
    async () => getCompanyType(id),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!id,
    }
  );
};

export default useCompanyType;
