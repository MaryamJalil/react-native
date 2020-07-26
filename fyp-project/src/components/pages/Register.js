import React, {  useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet.css';
import { BsFillPersonPlusFill } from "react-icons/bs";

import { useHistory } from "react-router-dom";
import UserContext from '../pages/context/UserContext'
import Axios from "axios";
import ErrorNotice from '../pages/misc/ErrorNotice'

export default function Register() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck };
      await Axios.post("http://localhost:5000/users/register", newUser);
      console.log('error');

      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };


        return (
            <div>
                                <div className="container" >
                                    <div className="row " >

                <BsFillPersonPlusFill color='purple' size='10rem'/>
                
                </div>
                <h2>Sign Up</h2></div>
                {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
                
               
                <div className="container align-self-start  justify-content-start" style={{marginBottom:"100px"}}>
                    <div className="row  ">
                <Form  onSubmit={submit}>
                <Form.Group >
    <Form.Label>Username</Form.Label>
    <Form.Control className="place"  type="username" placeholder="Enter username"  
    />
    
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className="place"  type="email" placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              />
    
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control className="place"  type="password" placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label> Confirm Password</Form.Label>
    <Form.Control className="place"  type="password" placeholder="Password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    {/* <label htmlFor="register-display-name">Display name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        /> */}
  </Form.Group>
  <Button style={{backgroundColor:"purple"}} type="submit"  href="/login">
    Sign Up
  </Button>
</Form>
</div>
</div>
            </div>
        );
    }
