import React, { Component } from 'react';
import { Card, TextField, Button, Grid, CardContent} from '@material-ui/core'


class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    
        render() {
            const { values, handleChange } = this.props;
            return (
              
                <>
                 <Grid container spacing={3} >
                 <Grid xs={12} item  >
                     <h1>Enter your personal details</h1>
                    <Card>
                    <CardContent>
                    <TextField
                      placeholder="Enter Your Name"
                      label="Name"
                      onChange={handleChange('name')}
                      defaultValue={values.name}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your Phone Number"
                      label="Phone Number"
                      onChange={handleChange('phone')}
                      defaultValue={values.phone}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your LinkedIn"
                      label="LinkedIn"
                      onChange={handleChange('linkedin')}
                      defaultValue={values.linkedin}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your Github"
                      label="Github"
                      onChange={handleChange('github')}
                      defaultValue={values.github}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <TextField
                      placeholder="Enter Your Skills"
                      label="Skills"
                      onChange={handleChange('skills')}
                      defaultValue={values.skills}
                      margin="normal"
                      fullWidth
                    />
                    
                    </CardContent>
                    </Card>

                    <br />
                    <Button
                      style={{backgroundColor: '#7395AE'}}
                      variant="contained"
                      onClick={this.continue}
                    >Continue</Button>
                    

                  </Grid>
                  </Grid>
                  
                </>
            
            );
          }
        }


export default PersonalDetails;
