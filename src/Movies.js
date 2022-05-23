import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends React.Component {
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
                <Movie image_url={value.image_url}
                title={value.title}
                description={value.description}
                released_on={value.released_on}
                total_votes={value.total_votes}
                average_votes={value.average_votes}
                popularity={value.popularity}/>
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

export default Movies;
