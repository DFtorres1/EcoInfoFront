import { useQuery } from "react-query";
import api from "src/utils/api";
import { companyQueryKeys } from "src/utils/queryKeys";

const getCompanyDetail = async (id?: string): Promise<Company> => {
  const { data } = await api.get(`/company/${id}`);
  return data;
};

const useCompanyDetail = (id?: string) => {
  return useQuery<Company>(
    companyQueryKeys.detail(id ?? 0),
    async () => getCompanyDetail(id),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!id,
    }
  );
};

export default useCompanyDetail;
