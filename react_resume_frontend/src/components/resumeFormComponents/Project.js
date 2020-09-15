import React, { Component } from "react";
import {
  Card,
  Grid,
  TextField,
  Button,
  CardHeader,
  CardContent,
} from "@material-ui/core";

class Project extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Grid container spacing={3}>
          <Grid xs={12} item>
              <h1>Enter your Projects</h1>
            <br />
            <Card>
              <CardHeader title="Project 1" />
              <CardContent>
                <TextField
                  placeholder="Enter Title"
                  label="Title"
                  onChange={handleChange("proTitle1")}
                  defaultValue={values.proTitle1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter The Link"
                  label="Link"
                  onChange={handleChange("proLink1")}
                  defaultValue={values.proLink1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description the project"
                  label="Description"
                  onChange={handleChange("proDesc1")}
                  defaultValue={values.proDesc1}
                  margin="normal"
                  fullWidth
                />
                <br />
              </CardContent>
            </Card>

            <Card>
            <CardHeader title="Project 2" />
              <CardContent>
              <TextField
                  placeholder="Enter Title"
                  label="Title"
                  onChange={handleChange("proTitle2")}
                  defaultValue={values.proTitle2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter The Link"
                  label="Link"
                  onChange={handleChange("proLink2")}
                  defaultValue={values.proLink2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description the project"
                  label="Description"
                  onChange={handleChange("proDesc2")}
                  defaultValue={values.proDesc2}
                  margin="normal"
                  fullWidth
                />
                <br />
              </CardContent>
            </Card>
            <br />
            <Button style={{backgroundColor: '#7395AE', margin: 20}}variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button style={{backgroundColor: '#7395AE', margin: 20}} variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Project;
