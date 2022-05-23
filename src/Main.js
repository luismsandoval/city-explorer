import axios from 'axios';
import React from 'react';
import Explore from './Explore';
import Map from './Map';
import Error from './Error';
import Weather from './Weather';
import Movies from './Movies';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      return: '',
      weather: '',
      movies: '',
      error: ''
    }
  }

  getLocation = async (event) => {
    try {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(url);
    this.setState({ return: response.data[0], error: ''}, this.showAll);
    } catch (error) {
      await this.errorHandler(error)
    }
  }

  getWeather = async (event) => {
    try {
      const url = process.env.REACT_APP_SERVER;

      const response = await axios.get(`${url}/weather?lat=${this.state.return.lat}&lon=${this.state.return.lon}`);
      this.setState({ weather: response.data });
    } catch (error) {
      await this.errorHandler(error);
    }
  }

  errorHandler = (error) => this.setState({error: `${error.response.status} ${error.response.data.error}`, return: ''})

  getMovies = async (event) => {
    try {
      const url = process.env.REACT_APP_SERVER;

      const response = await axios.get(`${url}/movie?search=${this.state.return.display_name}`);
      this.setState({ movies: response.data });
    } catch (err) {
      this.errorHandler(err);
    }
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.getLocation();
  }

  showAll = () => {
    this.getWeather();
    this.getMovies();
  }

  searchLocation = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <>
        <Explore return={this.state.return} searchLocation={this.searchLocation} clickHandler={this.clickHandler} />

        <Map lat={this.state.return.lat} lon={this.state.return.lon} />

        <Weather weather={this.state.weather} />
        <Movies movies={this.state.movies} />

        <Error error={this.state.error} />
      </>
    );
  }
}

export default Main;
