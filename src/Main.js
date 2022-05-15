import axios from 'axios';
import React from 'react';
import Explore from './Explore';
import Map from './Map';
import Weather from './Weather';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationName: '',
      lat: '',
      lon: '', 
      weather: []
    }
  }

  getLocation = async (event) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(url);
    this.setState({ locationName: response.data[0].display_name, lat: response.data[0].lat, lon: response.data[0].lon});
  }

  getWeather = async (event) => {
    const url = `${process.env.REACT_APP_WEATHER_KEY}?type=${this.state.searchQuery}`;

    const response = await axios.get(url);
    this.setState({ weather: response.data.arr.map(value => (`${value.date} ${value.description}`)) });
    console.log('weather response: ', response.data.arr);
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.getLocation();
    this.getWeather();
  }

  searchLocation = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
    <>
      <Explore locationName= {this.state.locationName} lat={this.state.lat} lon={this.state.lon} allData= {this.state.allData} searchLocation= {this.searchLocation} clickHandler= {this.clickHandler} />

      <Map lat={this.state.lat} lon={this.state.lon}/>

      <Weather weather={this.state.weather}/>
    </>
  );
  }
}

export default Main;
