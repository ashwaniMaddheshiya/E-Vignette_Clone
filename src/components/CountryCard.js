import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CountryCard = (props) => {
  return (
   <>
   
   <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src={props.imgSource} />
      <Card.Body>
        <Card.Title>{props.country}</Card.Title>
        <Card.Text>
          Buy E-Vignette for {props.country}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default CountryCard