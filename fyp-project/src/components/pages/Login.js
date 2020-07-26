import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet.css';
import { AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import  ErrorNotice from '../pages/misc/ErrorNotice';
import UserContext from '../pages/context/UserContext'


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
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
    <div className="logo">
               <AiOutlineUser color='purple' size='10rem' 

  /><h2>Login</h2>
  </div>
  
  <div className="container">
  {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
              <Form className="container"  onSubmit={submit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  className="place" type="email" placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  className="place" type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              />
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
