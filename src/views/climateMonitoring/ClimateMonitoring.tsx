import { Text, View } from "react-native";
import useCurrentWeather from "./useCurrentWeather";

const ClimateMonitoring = () => {
  const {data: currentWeather} = useCurrentWeather("4.35", "74.04", "55bf7eb35bbec449dbc16d1e0ea50882")
  console.log(currentWeather)
  return (
    <View>
      <Text>ClimateMonitoring</Text>
    </View>
  );
};

export default ClimateMonitoring;
