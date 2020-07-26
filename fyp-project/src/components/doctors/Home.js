import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Pet Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Shop By Category" id="collasible-nav-dropdown">
      <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Pet Supplies</NavDropdown.Item>
                <NavDropdown.Divider />

        <NavDropdown.Item href="#action/3.3">Cat</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Dog</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Buy/Sell</Nav.Link>
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">Pets and Vet</Nav.Link>
      <Nav.Link href="#features">Find Lost Pet</Nav.Link>



      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
      
    </Nav>
    <Nav>
      {/* <div className="py-2"> */}
    <NavDropdown title="Setting" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Make Pert Portfolio</NavDropdown.Item>


        <NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sign up</NavDropdown.Item>

      </NavDropdown>
      {/* </div> */}

   < AiOutlineShoppingCart color='white' size='3em'/>
   </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        );
    }
}

export default Home;