import React, { Component } from 'react';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import poster from './images/poster.png';
import location from './images/location.png';
import nearbylocation from './images/nearbylocation.png'
import Button from 'react-bootstrap/Button'

class Details extends Component {
    render() {
        return (
            <div>
                                
<Container >
  
<Jumbotron style={{marginTop:'30px'}}>
  <Row style={{marginBottom:'20px',  fontFamily: "Times New Roman, Times, serif"
}} >

  A platform that reunites lost and stray pets to their owners.
   All you need to do to get our service is to make a report to us, post a shout out; and we will start looking for your family member.
   Here is how we work; we feature three stages to get you the best end you seek. 
   
</Row>

<CardDeck>
  <Card>
    <Card.Img variant="top" src={poster} />
    <Card.Body>
    <Button variant="danger">Make poster</Button>
      <Card.Text>
      Tell us about your lost pet; by posting a shout out on our website.
       By that, you will get concerned people in your neighborhoods right on the spot to help search for your pet. 
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={location} />
    <Card.Body>
    <Button variant="warning">Add location</Button>
      <Card.Text>
      Add the location from where your pet is lost

      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={nearbylocation}/>
    <Card.Body>
    <Button variant="success">Notify People</Button>
      <Card.Text>
        Nearby people will be notified according to the location which you add.
        If someone finds your pet then thety can contact you through chat.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardDeck>


</Jumbotron>
</Container>
            </div>
        );
    }
}

export default Details;