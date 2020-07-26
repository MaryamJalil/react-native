import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet.css';
import { BsFillPersonPlusFill } from "react-icons/bs";

class Signup extends Component {
    render() {
        return (
            <div>
                                <div className="container" >
                                    <div className="row " >

                <BsFillPersonPlusFill color='purple' size='10rem'/>
                
                </div>
                <h2>Sign Up</h2></div>
                
               
                <div className="container align-self-start  justify-content-start" style={{marginBottom:"100px"}}>
                    <div className="row  ">
                <Form>
                <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control className="place"  type="username" placeholder="Enter username" />
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="place"  type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="place"  type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control className="place"  type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button style={{backgroundColor:"purple"}} type="submit">
    Sign Up
  </Button>
</Form>
</div>
</div>
            </div>
        );
    }
}

export default Signup;