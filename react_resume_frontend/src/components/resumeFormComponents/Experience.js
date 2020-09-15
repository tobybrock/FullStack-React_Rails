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
              <h1>Enter your Experience</h1>
            <br />
            <Card>
              <CardHeader title="Experience 1" />
              <CardContent>
                <TextField
                  placeholder="Enter Organisation"
                  label="Organisation"
                  onChange={handleChange("expOrg1")}
                  defaultValue={values.expOrg1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Position"
                  label="Position"
                  onChange={handleChange("expPos1")}
                  defaultValue={values.expPos1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter the duration you were at the job"
                  label="Duration"
                  onChange={handleChange("expDur1")}
                  defaultValue={values.expDur1}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description of your job"
                  label="Description"
                  onChange={handleChange("expDesc1")}
                  defaultValue={values.expDesc1}
                  margin="normal"
                  fullWidth
                />

                <br />
              </CardContent>
            </Card>

            <Card>
            <CardHeader title="Experience 2" />
              <CardContent>
                <TextField
                  placeholder="Enter Organisation"
                  label="Organisation"
                  onChange={handleChange("expOrg2")}
                  defaultValue={values.expOrg2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter Your Position"
                  label="Position"
                  onChange={handleChange("expPos2")}
                  defaultValue={values.expPos2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter the duration you were at the job"
                  label="Duration"
                  onChange={handleChange("expDur2")}
                  defaultValue={values.expDur2}
                  margin="normal"
                  fullWidth
                />
                <br />
                <TextField
                  placeholder="Enter a description of your job"
                  label="Description"
                  onChange={handleChange("expDesc2")}
                  defaultValue={values.expDesc2}
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
