import React from 'react';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class WeatherDay extends React.component {

  render() {
    return (
      <Container>
        <Card>
          <Card.Title>{this.props.date}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card>
      </Container>
    )
  }
}

export default WeatherDay;
