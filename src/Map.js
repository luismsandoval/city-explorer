import React from 'react';


class Map extends React.Component {
  render() {
    return (
    <>
    {this.props.lat &&
      <img alt='map' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.lat},${this.props.lon}&zoom=18&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>`}/>
    }
    </>
  );
  }
}

export default Map;
