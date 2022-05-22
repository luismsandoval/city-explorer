import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Explore extends React.Component {
  render() {
    return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>search city</Form.Label>
          <Form.Control  
          onChange={this.props.searchLocation} 
          placeholder='enter city' />
        </Form.Group>
        <Button onClick={this.props.clickHandler} variant='primary' type='submit '>
          Explore!
        </Button>
        {this.props.return.display_name && 
          <h2>The city we searched for is {this.props.return.display_name} {this.props.return.lat} {this.props.return.lon}</h2>
        }
      </Form>
    </>
  );
  }
}

export default Explore;
