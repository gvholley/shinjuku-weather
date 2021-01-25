import React from 'react';
import WeatherCard from './components/WeatherCard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <WeatherCard
        dt={1406080800 * 1000}
        min={20}
        max={35}
        main="Sunny"
        icon="01d"
      />
    </div>
  );
}

export default App;
