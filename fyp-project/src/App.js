import React, { useState, useEffect } from "react";
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route,Switch} from "react-router-dom";
import PetClinic from './components/pharmacist/PetClinic';
import Home from './components/pharmacist/Home';
import Pet from './components/pharmacist/Pet';
import DogAccessories from './components/pharmacist/DogAccessories';
import Login from  '../src/components/pages/Login';
import Register from '../src/components/pages/Register';
import UserContext from  '../src/components/pages/context/UserContext'
import Axios from "axios";

import Container from 'react-bootstrap/Container';



function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    < >  
          <BrowserRouter>
 
     <UserContext.Provider value={{ userData, setUserData }}>

     <Home/>

       <Switch>
      
         <Route exact path="/" component={DogAccessories}/>
         <Route path="/about" component={Pet}/>
         <Route path="/shopbycategory" component={PetClinic}/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/>
 
       </Switch>
       
     </UserContext.Provider>
     </BrowserRouter>

   
      

    </>
  );
}

export default App;
