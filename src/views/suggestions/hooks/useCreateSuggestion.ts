import { useMutation } from "react-query";
import api from "src/utils/api";

const createSuggestion = async (suggestion: Suggest) => {
  const { data } = await api.post("/suggestion", suggestion);
  return data;
};

const useCreateSuggestion = () => {
  return useMutation({
    mutationFn: (suggestion: Suggest) => createSuggestion(suggestion),
    onError: (err: any) => {
      console.log("Fetch error", err);
    },
  });
};

export default useCreateSuggestion
