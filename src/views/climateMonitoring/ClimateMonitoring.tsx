import { Text, View } from "react-native";
import useCurrentWeather from "./useCurrentWeather";
import { useState } from "react";
import { citiesList } from "src/utils/citiesList";

const ClimateMonitoring = () => {
  const [currentCity, setCurrentCity] = useState<City | undefined>(
    citiesList.find((c) => c.name === "Bogota")
  );
  const [currentCountry, setCurrentCountry] = useState<string>("Colombia");

  const { data: currentWeather } = useCurrentWeather(
    currentCity?.coord.lat ?? 35.6895,
    currentCity?.coord.lon ?? 139.69171,
    "55bf7eb35bbec449dbc16d1e0ea50882"
  );
  console.log(currentWeather);
  return (
    <View>
      <Text>ClimateMonitoring</Text>
    </View>
  );
};

export default ClimateMonitoring;
