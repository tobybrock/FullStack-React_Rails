
import React from 'react';
import { Redirect } from "react-router-dom";
import { isLoggedIn } from '../App';


function PrivateRoute({ children, ...rest }) {

    console.log(children);
    console.log({...rest});
    const path = {...rest}.path;  
  
    if(isLoggedIn()) {
      return (
        children
      )
    }
  

    return (
      <Redirect 
        to={{
          pathname: '/login',
          state: { from: path }
        }}
      />
    )
  
  }

  export default PrivateRoute;