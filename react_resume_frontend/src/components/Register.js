import React, { useState } from "react";
import { register } from "../api";
import { useHistory } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const updateData = (e) => {
    const name = e.currentTarget.name;
    const target = e.currentTarget;
    //ternary used to account for checkbox
    const value = target.type === "checkbox" ? target.checked : target.value;
    let obj = { ...formData };
    obj[name] = value;
    setFormData(obj);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitting", formData);

    register(formData)
      .then((result) => {
        console.log("user created", result);
        history.push("/login");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={updateData} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={updateData} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={updateData} />

        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
