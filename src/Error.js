import React from 'react';


class Error extends React.Component {
    render() {
      return (
        <h3>{this.props.error}</h3>
      )
    }
  }

export default Error;
