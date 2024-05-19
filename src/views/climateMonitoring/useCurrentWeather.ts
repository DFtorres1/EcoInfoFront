import axios from "axios";
import { useQuery } from "react-query";
import { weatherQueryKeys } from "src/utils/queryKeys";

const getCurrentWeather = async (
  lat: number,
  lon: number,
  apiKey: string
): Promise<WeatherData> => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return data;
};

const useCurrentWeather = (lat: number, lon: number, apiKey: string) => {
  return useQuery<WeatherData>(
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
