import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      <>
        {
          <div>
            <Row>
            {
              this.props.movies &&
              this.props.movies.map(value => (
                <Col>
                <Card bg={'light'} border={'primary'} className='text-center mb-2'>
                  <Card.Img variant='top' src={value.image_url} />
                  <Card.Body>
                    <Card.Header>{value.title}</Card.Header>
                    <Card.Text>{value.description}</Card.Text>
                    <Card.Text>Total Votes: {value.total_votes}</Card.Text>
                    <Card.Text>Average Votes: {value.average_votes}</Card.Text>
                    <Card.Text>Popularity: {value.popularity}</Card.Text>
                    <Card.Text>Release Date: {value.released_on}</Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              ))
            }
            </Row>
          </div>
        }
      </>

    );
  }
}

export default Movie;
