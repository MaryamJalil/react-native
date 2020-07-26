
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { MdPets } from "react-icons/md";

// import './pages/Stylesheet.css';

class Customer extends Component {
    render() {
        
        return (
            <div style={{color:"white"}}>
             
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Pet Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="#features ">Home&nbsp; <AiOutlineHome  color='white' size='2rem' /></Nav.Link>
      <Nav.Link href="#pricing ">About</Nav.Link>
      <NavDropdown title="Shop By Category" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Pet Supplies</NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item href="#action/3.2">Dogs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cats</NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item href="#action/3.1">Pets</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Dogs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cats</NavDropdown.Item>

      </NavDropdown>
      <Form inline >
   
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />      
     
      <Button variant="secondary">Search</Button>

    </Form>
    </Nav>
    <Nav>
    <Nav.Link href="#portfolio "  className="py-2 px-md-3">Pet Portfolio
    <MdPets color='white' size='1rem' margin-right='100px'/>

    </Nav.Link>

        <div>
      <AiOutlineShoppingCart  size='2rem'  />
      <div style={{color:"white"}}>Cart</div>
      </div>
      <NavDropdown title="Help and Setting" id="collasible-nav-dropdown"  className="py-0 px-md-4">
        <NavDropdown.Item href="#action/3.1 margin-top: -0.25rem">History</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2 margin-top: -0.25rem">Account & Setting</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Sign In</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>

      </NavDropdown>
    </Nav>
  </Navbar.Collapse>

</Navbar>
            </div>
        );
    }
}

export default Customer;