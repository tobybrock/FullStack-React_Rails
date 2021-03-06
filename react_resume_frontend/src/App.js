import React, { useState }  from 'react';
import Nav from "./components/Nav";
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import UserForm from './components/resumeFormComponents/UserForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  
  return (
    <Router>
    <div className="App">

      <Nav />

      <Switch>
          <Route path="/profile">
          {
              loggedIn ? <Profile user={user} /> : <Redirect to='/login' />
            }
          </Route>
          <Route path="/login">
          <Login  setLoggedIn={setLoggedIn} setUser={setUser} />
          </Route>
          <Route path ="/register"> <Register /></Route>
           {/* <Route path="/logout">{loggedIn && <LogoutPage />}
          </Route>*/}
          <Route path="/userform">{
          loggedIn ? <UserForm /> : <Redirect to='/login' />
          }</Route> 
          <Route path="/"> <Home user={user} /></Route> 
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
