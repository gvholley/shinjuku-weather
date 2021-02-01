import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';



const customStyles = {
  fontFamily:  'Helvetica, sans-serif',
  gradientStart:  '#5B9279',
  gradientMid:  '#04A7F9',
  gradientEnd:  '#4BC4F7',
  locationFontColor:  '#FFF',
  todayTempFontColor:  '#FFF',
  todayDateFontColor:  '#B5DEF4',
  todayRangeFontColor:  '#B5DEF4',
  todayDescFontColor:  '#B5DEF4',
  todayInfoFontColor:  '#B5DEF4',
  todayIconColor:  '#FFF',
  forecastBackgroundColor:  '#FFF',
  forecastSeparatorColor:  '#DDD',
  forecastDateColor:  '#777',
  forecastDescColor:  '#777',
  forecastRangeColor:  '#777',
  forecastIconColor:  '#4BC4F7',
};

const WeatherCard = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'e6c5ffe9d357a02f1df56eaa546d46dc',
    lat: '35.6896',
    lon: '139.7006',
    lang: 'jp',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="jp"
      locationLabel="Shinjuku"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

export default WeatherCard;
