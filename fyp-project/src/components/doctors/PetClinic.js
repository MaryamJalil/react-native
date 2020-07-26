import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import diagnose from './images/diagnose.png';
import surgury from './images/surgury.png';
import vaccine from './images/vaccine.png';
import ultrasound from './images/ultrasound.png';
import checkup from './images/checkup.png';

class PetClinic extends Component {
    render() {
        return (
            <div>
              <Container  >
<Jumbotron style={{marginTop:'30px'}}>

  <Row  >
      <div style={{fontWeight:"bold",fontSize:"30px"}}>From Our Blog</div>
      </Row>
      <CardDeck style={{marginTop:"30px"}}>
  <Card>
    <Card.Img variant="top" src={diagnose} />
    
    <Card.Body>
      <Card.Title>Pet Diagnostic Lab</Card.Title>
      <Card.Text>
      We have Fully equipped diagnostic laboratory service
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={vaccine} />
    <Card.Body>
      <Card.Title>Pets Vaccinations</Card.Title>
      <Card.Text>
      Petsworld Pet Clinic provide low cost pet vaccinations for your.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={surgury} />
    <Card.Body>
      <Card.Title>Pets Surgery</Card.Title>
      <Card.Text>
      Surgery is a tried-and-true form of veterinary care, not only for alleviating
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={ultrasound} />
    
    <Card.Body>
      <Card.Title>Pet Ultrasound</Card.Title>
      <Card.Text>
      Veterinary ultrasonography, also known as an ultrasound test for your pet
            </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={checkup} />
    
    <Card.Body>
      <Card.Title>Pet Health Checkup & Treatments</Card.Title>
      <Card.Text>
      We provide services for the health problems of birds, fish and exotic       </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
<Button variant="dark" >Make an Appointment</Button>{' '}

</Jumbotron>
</Container>

            </div>
        );
    }
}

export default PetClinic;