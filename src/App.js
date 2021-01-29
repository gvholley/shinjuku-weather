import React from 'react';
import WeatherCard from './components/WeatherCard';
import CitySelector from './components/CitySelector';
import useFetch from './hooks/useFetch';
import {apiKey, baseUrl} from './config';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const { data, error, inProgress } = useFetch();
  return (
    <div>
      <WeatherCard
        dt={1406080800 * 1000}
        min={20}
        max={35}
        main="Sunny"
        icon="01d"
      />
      <CitySelector onSelectButtonClick={city => setUrl(`${baseUrl}/data/2.5/forecast/daily?q=${city}&cnt=5&appId=$units=metric`)} />
    </div>
  );
}

export default App;
