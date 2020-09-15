import React, { useState } from "react";
import { register } from "../api";
import { useHistory } from "react-router-dom";
import { TextField, Button, Card, Grid } from "@material-ui/core";

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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card>
            
              <h1>Register</h1>
            
            <form>
              <TextField
                id="outlined-basic"
                label="email"
                name="email"
                onChange={updateData}
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="name"
                name="name"
                onChange={updateData}
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="password"
                type="password"
                name="password"
                onChange={updateData}
                variant="outlined"
              />
              <br />
              <Button style={{ backgroundColor: "#7395AE", margin:20}} onClick={submit}>
                Register
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
