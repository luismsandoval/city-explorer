import axios from 'axios';
import React from 'react';
import Explore from './Explore';
import Map from './Map';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      searchQuery: '',
      lat: '',
      lon: ''
    }
  }

  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(url);
    this.setState({ locationName: response.data[0].display_name, lat: response.data[0].lat, lon: response.data[0].lon});
    console.log(this.state, response.data);
  }

  searchLocation = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
    <>
      <Explore locationName= {this.state.locationName} lat={this.state.lat} lon={this.state.lon} searchQuery= {this.state.searchQuery} getLocation= {this.getLocation} searchLocation= {this.searchLocation} />

      <Map lat={this.state.lat} lon={this.state.lon}/>
    </>
  );
  }
}

export default Main;
