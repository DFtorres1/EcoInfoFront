import axios from "axios";
import { useQuery } from "react-query";
import { weatherQueryKeys } from "src/utils/queryKeys";

const getCurrentWeather = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=55bf7eb35bbec449dbc16d1e0ea50882`
  );
  return data;
};

const useCurrentWeather = (lat: number, lon: number) => {
  return useQuery<WeatherData>(
    weatherQueryKeys.detail(lat),
    async () => getCurrentWeather(lat, lon),
    {
      staleTime: Infinity,
      notifyOnChangeProps: ["data", "error"],
      enabled: !!lat,
    }
  );
};

export default useCurrentWeather;
