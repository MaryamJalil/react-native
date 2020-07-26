import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet.css';
import { AiOutlineUser } from "react-icons/ai";



class Login extends Component {
  render() {
        return (
            <div>
    <div className="logo">
               <AiOutlineUser color='purple' size='10rem' 

  /><h2>Login</h2>
  </div>
  
  <div class="container">
              <Form className="container">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  className="place" type="email" placeholder="Enter email" />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  className="place" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button  type="submit" style={{backgroundColor:"purple"}}>
    Login
  </Button>
</Form></div>
            </div>
        );
    }
}

export default Login;