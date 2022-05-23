import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

class Movie extends React.Component {

  render() {
    return (
      <Container>
         <Card bg={'light'} border={'primary'} className='text-center mb-2'>
                  <Card.Img variant='top' src={this.props.image_url} />
                  <Card.Body>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>Total Votes: {this.props.total_votes}</Card.Text>
                    <Card.Text>Average Votes: {this.props.average_votes}</Card.Text>
                    <Card.Text>Popularity: {this.props.popularity}</Card.Text>
                    <Card.Text>Release Date: {this.props.released_on}</Card.Text>
                  </Card.Body>
                </Card>
      </Container>
    )
  }
}

export default Movie;
