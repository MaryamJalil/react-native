import React, { Component } from 'react';
import { MdPets} from "react-icons/md";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {AiOutlineDoubleRight} from "react-icons/ai";

class Pet extends Component {
    render() {
        return (

            <div>
            
           <Container>
           <div className="text">
              FEATURED PETS
            </div>
  <Row className="justify-content-lg-center">
    <Col  md="auto">----------------------
    < MdPets color='black' size='3em' />----------------------

    </Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn3-www.cattime.com/assets/uploads/gallery/birman-cats-and-kittens-pictures/birman-cats-and-kittens-pictures-1.jpg"
   />
  <Card.Body>
    <Card.Title>Birman Cat Breed </Card.Title>
  
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.thesprucepets.com/thmb/eeIKwK7erX-gMrV7sNtSI6nxnf4=/425x326/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GreyPersianCatonGreenRug-67bef10b503d4e27b8264bc09f32983c.jpg" />
  <Card.Body>
    <Card.Title>Persian Cat Breed</Card.Title>
    
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Himalyan Cat Breed</Card.Title>
    
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
</Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/14/18/44/dog-2144031__340.jpg" />
  <Card.Body>
    <Card.Title>German Shepherd Dog Breed</Card.Title>
    
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn2-www.dogtime.com/assets/uploads/gallery/cocker-spaniel-dogs-and-puppies/cocker-spaniel-dogs-puppies-10.jpg" />
  <Card.Body>
    <Card.Title>Cocker Spaniel Breed</Card.Title>
    
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn2-www.dogtime.com/assets/uploads/gallery/stratfordshire-bull-terrior-dog-breed-pictures/puppy-6_680-453.jpg" />
  <Card.Body>
    <Card.Title>Staffordshire Bull Terrier Breed
</Card.Title>
    
    <Button variant="dark"><AiOutlineDoubleRight size='2rem' /></Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
           </div>
        );
    }
}

export default Pet;