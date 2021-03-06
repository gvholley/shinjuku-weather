import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);

  return (
    <Card>
      <Card />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</p>
        <p>Min: {min}</p>
        <p>Max: {max}</p>
      </Card.Body>
    </Card>
  )
};

export default WeatherCard;
