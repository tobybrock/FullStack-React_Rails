import React, { useState } from "react";
import { login, setToken } from "../api";
import { useHistory, Link } from "react-router-dom";
import { TextField, Button, Grid, Card} from "@material-ui/core"
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
      <h1>Login</h1>

      <form>
        <TextField id="outlined-basic" label="email" name="email" onChange={updateData} variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="password" type="password" name="password" onChange={updateData} variant="outlined" />
        <br />
        <Button style={{backgroundColor: '#7395AE', margin:20}} onClick={submit}>Login</Button>
        </form>
        <h2>Don't have an account?</h2>
        <Button style={{backgroundColor: '#7395AE', margin:20}} component={Link} to={'/register'}>Register Here</Button>
        </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
