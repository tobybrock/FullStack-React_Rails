  
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { login, updateHeaderOptions } from "../api";



export function LoginPage(props) {
  let history = useHistory();
  let location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: email,
      password: password,
    })
      .then((token) => {
        
        console.log(token);

        localStorage.setItem("token", token);   //store token
        props.setLoginStatus(true);             //update login state for nav
        updateHeaderOptions();                  //update the API header with new token
        history.push(from);                     //route to prior page or homepage
      })
      .catch((e) => {
        console.log(e);
        //do something to tell user it failed
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email:
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

//export default LoginPage;