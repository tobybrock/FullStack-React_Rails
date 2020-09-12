import React, { useState } from "react";
import { login, setToken } from "../api";
import { useHistory, Link } from "react-router-dom";

function Login(props) {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const updateData = (e) => {
    const email = e.currentTarget.name;
    const target = e.currentTarget;
    //ternary used to account for checkbox
    const value = target.type === "checkbox" ? target.checked : target.value;
    let obj = { ...formData };
    obj[email] = value;
    setFormData(obj);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitting", formData);

    login(formData)
      .then((result) => {
        console.log("logged in", result);
        props.setLoggedIn(true);
        props.setUser(result.user);
        setToken(result.user.token);
        history.push("/profile");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <h1>Login Works</h1>

      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={updateData} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={updateData} />

        <button>Login</button>
      </form>
      <Link to="/register">
        <button>
          <span>Register</span>
        </button>
      </Link>
    </>
  );
}

export default Login;
