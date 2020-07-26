import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import alert from './images/alert.png';
import Button from 'react-bootstrap/Button';
import lostdog2 from './images/lostdog2.png';
import lostpet from './images/lostpet.png';
import lostpet0 from './images/lostpet0.png';





class PetLost extends Component {
    render() {
        return (
            <div>
                
<Container >
  
<Jumbotron style={{marginTop:'30px'}}>
      <Row>

  <h1>  How petstore help you to find your lost pet
</h1>
  <Col>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src={lostdog2} />

  </Card.Body>
</Card> </Col>

<Col>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src={lostpet} />

  </Card.Body>
</Card></Col>

<Col>
<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src={lostpet0} />

  </Card.Body>
</Card></Col>
</Row>
</Jumbotron>

</Container>


                
<Container  >
  <Row >
  <Col>
  <Jumbotron style={{marginTop:'30px'}}>
  <h1>  How petstore help you to find your lost pet
</h1>
   
   <Container>
  
  <Row xs={1} md={2}>
    <Col><Image src={alert} fluid /></Col>
    <Col >Pet Store helps you find your missing pet quickly.
    <br/><br/>
   <Col> You need to act quickly to find your missing pet. 
    Report your lost dog, cat, rabbit and other pets today and boost recovery chances to find your lost pet.
    </Col>
    <Col>
    <Button variant="danger" style={{marginTop:'30px'}}>Get Started Now!</Button></Col>
    </Col>
  </Row>
</Container>
</Jumbotron>
</Col>

</Row>
</Container>

            </div>
        );
    }
}

export default PetLost;