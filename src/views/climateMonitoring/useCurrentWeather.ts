import axios from "axios";
import { useQuery } from "react-query";
import { weatherQueryKeys } from "src/utils/queryKeys";

const getCurrentWeather = async (
  lat: string,
  lon: string,
  apiKey: string
): Promise<any> => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return data;
};

const useCurrentWeather = (lat: string, lon: string, apiKey: string) => {
  return useQuery<any>(
    weatherQueryKeys.detail(),
    async () => getCurrentWeather(lat, lon, apiKey),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!apiKey,
    }
  );
};

export default useCurrentWeather;
