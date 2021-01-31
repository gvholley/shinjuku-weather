import React from 'react';

class WeekContainer extends React.Component {
  render() {

    componentDidMount = () => {
    const weatherURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=35.6896&lon=139.7006&appid=e6c5ffe9d357a02f1df56eaa546d46dc"

  fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div>
        {this.formatDayCards()}
      </div>
    )
  }

export default WeekContainer;
