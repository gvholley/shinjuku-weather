import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import {apiKey, baseUrl} from './config';
import WeatherList from './components/WeatherList';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function App() {

  const { data, error, inProgress, setUrl } = useFetch();
  return (
    <Container className="App">
      <CitySelector onSelectButtonClick={city => setUrl(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=${apiKey}&units=metric`)} />
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
}

export default App;
