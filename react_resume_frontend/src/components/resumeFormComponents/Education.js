import React, { Component } from "react";
import {
  Card,
  Grid,
  TextField,
  Button,
  CardHeader,
  CardContent,
} from "@material-ui/core";

class Experience extends Component {
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
              <h1>Enter your Education</h1>
            <br />
            <Card>
              <CardHeader title="Education 1" />
              <CardContent>
                <TextField
                  placeholder="Enter School/University"
                  label="School/University"
                  onChange={handleChange("eduSchool1")}
                  defaultValue={values.eduSchool1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter When you Graduated"
                  label="Graduation"
                  onChange={handleChange("eduYear1")}
                  defaultValue={values.eduYear1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Qualification"
                  label="Qualification"
                  onChange={handleChange("eduQualification1")}
                  defaultValue={values.eduQualification1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description of your studys"
                  label="Description"
                  onChange={handleChange("eduDesc1")}
                  defaultValue={values.eduDesc1}
                  margin="normal"
                  fullWidth
                />
                <br />
              </CardContent>
            </Card>

            <Card>
            <CardHeader title="Education 2" />
              <CardContent>
              <TextField
                  placeholder="Enter School/University"
                  label="School/University"
                  onChange={handleChange("eduSchool2")}
                  defaultValue={values.eduSchool2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter When you Graduated"
                  label="Graduation"
                  onChange={handleChange("eduYear2")}
                  defaultValue={values.eduYear2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Qualification"
                  label="Qualification"
                  onChange={handleChange("eduQualification2")}
                  defaultValue={values.eduQualification2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description of your studys"
                  label="Description"
                  onChange={handleChange("eduDesc2")}
                  defaultValue={values.eduDesc2}
                  margin="normal"
                  fullWidth
                />
                <br />
              </CardContent>
            </Card>
            <br />
            <Button style={{backgroundColor: '#7395AE', margin: 20}} variant="contained" onClick={this.back}>
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

export default Experience;