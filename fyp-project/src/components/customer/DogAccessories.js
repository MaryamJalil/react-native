import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Stylesheet.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
// import { Footer } from 'react-materialize';
class DogAccessories extends Component {
    render() {
        return (
            <div>
               
                <div className="text"> SHOP DOG SUPPLIES BY CATEGORY</div>
                <CardDeck>
       
     <Container>
       <Row>
         <Col>

  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/01DogFood.jpg" />
    <Card.Body>
     
     <Button variant="dark">Shop </Button>{' '}

    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/02DogTreats.jpg" />
    <Card.Body>
     
      <Button variant="dark">Shop </Button>{' '}

    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/03DogHealth.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

    
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/04DogFlea.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/05DogToys.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/06DogCrate.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

     
    </Card.Body>
  </Card> 
  </Col>
  </Row>
  </Container>
 
</CardDeck>

<CardDeck>

  <Container>
    <Row>
      <Col>

  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/07DogBed.jpg" />
    <Card.Body>
    <Button variant="dark">Shop</Button>{' '}

    </Card.Body>
  </Card>
  </Col>
  
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/08DogGate.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

    
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/09DogApparel.jpg" />
    <Card.Body>
    <Button variant="dark">Shop</Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/10DogCollar.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/11DogWaste.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

     
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/12DogGrooming.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

     
    </Card.Body>
  </Card> 

</Col>
</Row>
</Container>
</CardDeck>
            </div>

            
        );
    }
}

export default DogAccessories;