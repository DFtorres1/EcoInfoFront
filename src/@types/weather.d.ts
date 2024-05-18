type Lang =
  | 'zu';

interface CallProps {
  key: string;
  lat?: number;
  lon?: number;
  city?: string;
  country?: string;
  zip_code?: string;
  unit?: 'standard' | 'metric' | 'imperial';
  lang?: Lang;
}

type WeatherData = {
  name: string;
  sys: {country: string};
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {speed: number};
  weather: [{description: string; icon: string}];
  icon: string;
};

type GeolocationResponse = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
};