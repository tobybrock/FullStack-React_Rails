import React, { useEffect, useState }  from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Profile from './components/Profile';
import { LoginPage } from './components/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import jwt from "jwt-decode";
import moment from "moment";

import './App.css';

const isLoggedIn = () => {
  const token = window.localStorage.getItem("token");

  try {
    const decoded = jwt(token);    
    const expires = moment.unix(decoded.exp);
    
    //todo set timoute for expiry to auto logout
    //bonus: auto refresh token if user is active and expiry approaches

    //true if token exists & expiry < current time
    return moment().isBefore(expires);
  } catch {
    return false;
  }
};


function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  return (
    <Router>
    <div className="App">

      <Nav logout={setLoggedIn} loginStatus={loggedIn}/>

      <Switch>
          <Route path="/profile">{loggedIn && <Profile />}
          </Route>
          <Route path="/login">
          <LoginPage setLoginStatus={setLoggedIn} />
          </Route>
          <Route path="/logout">{loggedIn && <LogoutPage />}
          </Route>
          <Route path="/userForm"><UserForm /></Route>
          <Route path="/"> <Home /></Route>
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;