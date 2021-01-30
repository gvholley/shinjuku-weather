import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import {apiKey, baseUrl} from './config';
import WeatherList from './components/WeatherList';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import WeatherCard from './components/WeatherCard';

function App() {

  const { data, error, inProgress, setUrl } = useFetch();
  return (
    <Container className="App">
      <WeatherCard />
    </Container>
  );
}

export default App;
