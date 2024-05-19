import { ScrollView, Text, View } from "react-native";
import useCurrentWeather from "./useCurrentWeather";
import { useEffect, useState } from "react";
import { citiesList, countriesList } from "src/utils/citiesList";
import { Avatar, Card, Icon, List } from "react-native-paper";
import LoadingScreen from "src/utils/LoadingScreen";

const ClimateMonitoring = () => {
  const [countryExpanded, setCountryExpanded] = useState(false);
  const [cityExpanded, setCityExpanded] = useState(false);
  const [currentCity, setCurrentCity] = useState<City | undefined>();
  const [currentCountry, setCurrentCountry] = useState<string>("Colombia");
  const {
    data: currentWeather,
    isLoading: weatherloading,
    error: weatherError
  } = useCurrentWeather(
    currentCity?.coord.lat ?? 35.6895,
    currentCity?.coord.lon ?? 139.69171
  );

  const handleCountryListPress = () => setCountryExpanded(!countryExpanded);
  const handleCityListPress = () => setCityExpanded(!cityExpanded);

  const handleCountryPress = (country: Country) => {
    setCountryExpanded(!countryExpanded);
    setCityExpanded(true);
    setCurrentCountry(country.name);
  };

  const handleCityPress = (city: City) => {
    setCityExpanded(!cityExpanded);
    setCurrentCity(city);
  };

  const formatTemp = (temp?: number) => {
    const newTemp: number = temp ? temp - 273.15 : 0;
    return `${newTemp.toFixed(2)}°C`;
  };

  useEffect(() => {
    console.log(weatherError);
  }, [weatherError]);

  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          title={"Lista de paises"}
          expanded={countryExpanded}
          onPress={handleCountryListPress}
        >
          {countriesList.map((country, countryIndex) => (
            <List.Item
              key={countryIndex}
              onPress={() => handleCountryPress(country)}
              title={country.name}
            />
          ))}
        </List.Accordion>
        <List.Accordion
          title={"Lista de Ciudades"}
          expanded={cityExpanded}
          onPress={handleCityListPress}
        >
          {citiesList
            .filter((city) => city.country === currentCountry)
            .map((city, cityIndex) => (
              <List.Item
                key={cityIndex}
                onPress={() => handleCityPress(city)}
                title={city.name}
              />
            ))}
        </List.Accordion>
      </List.Section>
      {!weatherloading && currentCity ? (
        <Card>
          <Card.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "aliceblue",
            }}
          >
            <Avatar.Image
              size={160}
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`,
              }}
            />
          </Card.Content>
          <Card.Title
            title={`${currentCity?.name} - ${currentWeather?.weather[0].main}`}
            subtitle={currentWeather?.weather[0].description}
          />
          <Card.Content>
            <Text>Humedad: {currentWeather?.main.humidity}%</Text>
            <Text>Temperatura: {formatTemp(currentWeather?.main.temp)}</Text>
            <Text>
              Temperatura Máxima: {formatTemp(currentWeather?.main.temp_max)}
            </Text>
            <Text>
              Temperatura Mínima: {formatTemp(currentWeather?.main.temp_min)}
            </Text>
          </Card.Content>
        </Card>
      ) : (
        <LoadingScreen />
      )}
      {!currentCity && <Text>Elije un pais y una ciudad para comenzar</Text>}
    </ScrollView>
  );
};

export default ClimateMonitoring;
