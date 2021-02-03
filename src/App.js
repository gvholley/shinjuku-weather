import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import { Container } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import {apiKey, baseUrl} from './config';
import WeatherList from './components/WeatherList';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import WeatherCard from './components/WeatherCard';
import WeekContainer from './components/WeekContainer';

function App() {

  return (
    <Container className="App">
    <WeatherCard />
      <WeatherList />
    </Container>
  );
}

export default App;
