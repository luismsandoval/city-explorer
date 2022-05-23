import React from 'react';
import WeatherDay from './WeatherDay';


class Weather extends React.Component {
  render() {
    console.log(this.props.weather);
    return (
    <>
      {this.props.weather &&
      this.props.weather.map(value => (
        <WeatherDay date={value.datetime} description={value.description} />
      ))
      }
    </>
  );
  }
}

export default Weather;
