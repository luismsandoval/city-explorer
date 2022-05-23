import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {
  render() {
    return (
    <>
      {this.props.weather &&
      this.props.weather.map(value => (
        <WeatherDay date={value.date} description={value.description} />
      ))
      }
    </>
  );
  }
}

export default Weather;
