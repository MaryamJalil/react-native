import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './Stylesheet.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class CatAccessories extends Component {
    render() {
        return (
            <div>
                <div className="text"> SHOP CAT SUPPLIES BY CATEGORY</div>
                <CardDeck>

   <Container>
  <Row>
    <Col>      
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/01CatFood.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}
     
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/02CatTreats.jpg" />
    <Card.Body>     
    <Button variant="dark">Shop </Button>{' '}

    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/03CatLitter.jpg" />
    <Card.Body>
      <Button variant="dark">Shop </Button>{' '}

    
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/04CatHealth.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/05CatTree.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}  
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/06CatPen.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '} 
    </Card.Body>
  </Card> 
  </Col>
  </Row></Container>
  
</CardDeck>
<CardDeck>

    <Container><Row>
      <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/07CatFeed.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '} 
    </Card.Body>
  </Card>
  </Col>

  <Col>

  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/08CatToys.jpg" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

    
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/09CatApparel.jpg" />
    <Card.Body>
      <Button variant="dark">Shop</Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/09CatCollar" />
    <Card.Body>
    <Button variant="dark">Shop</Button>{' '}

      
    </Card.Body>
  </Card>
  </Col>

  <Col>
  
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/10CatGrooming" />
    <Card.Body>
    <Button variant="dark">Shop </Button>{' '}

     
    </Card.Body>
  </Card>
  </Col>

  <Col>
  <Card>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/12CatFlea" />
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

export default CatAccessories;