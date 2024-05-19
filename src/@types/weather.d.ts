type WeatherData = {
  base: stirng;
  clouds: { all: number };
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: { speed: number };
};

type City = {
  name: string;
  country: string;
  coord: Coord;
};

type Country = {
  name: string;
};

type Coord = {
  lat: number;
  lon: number;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type Sys = {
  country: string;
  sunrise: number;
  sunset: number;
};
