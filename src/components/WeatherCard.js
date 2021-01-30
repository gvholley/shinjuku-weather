import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const WeatherCard = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'e6c5ffe9d357a02f1df56eaa546d46dc',
    lat: '48.137154',
    lon: '11.576124',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherCard;
