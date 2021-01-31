import React from 'react';

class WeekContainer extends React.Component {
  render() {

    componentDidMount = () => {
    const weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=35.6896&lon=139.7006&appid=e6c5ffe9d357a02f1df56eaa546d46dc"

    fetch(weatherUrl)
    .then( res => res.json())
    .then( data => console.log("DataList Loaded", data.list))
  }

    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default WeekContainer;
