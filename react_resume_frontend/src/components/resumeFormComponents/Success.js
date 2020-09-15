import React, { Component } from 'react';
import {
  Card,
  Grid,
  Button,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { postResume } from "../../api";


class Success extends Component {

 

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  

  submitted = (data) => (e) => {
    e.preventDefault();
    postResume(data)
      .then((result) => {
        console.log("success", result);
        e.preventDefault();
        this.props.nextStep();
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  
    render() {
      const { values } = this.props;
      const education = [ values.eduSchool1, values.eduQualification1, values.eduYear1, values.eduDesc1, values.eduSchool2, values.eduQualification2, values.eduYear2, values.eduDesc2 ]
      const experience = [ values.expOrg1, values.expPos1, values.expDur1, values.expDesc1, values.expOrg2, values.expPos2, values.expDur2, values.expDesc2]
      const project = [ values.proTitle1, values.proLink1, values.proDesc1, values.proTitle2, values.proLink2, values.proDesc2 ]
      const payload = {
        "name": values.name,
        "phone": values.phone,
        "linkedin": values.linkedin,
        "github": values.github,
        "skills": values.skills,
        "experience": experience,
        "education": education,
        "project": project,
      }

     
    return (
      <>
      <h1>Preview</h1>
          <Grid container justify = "center" spacing={2}>
          <Grid xs={8} item>
          <Card>
            <CardHeader
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              title={values.name}
              />
              <CardContent><b>Contact:  </b>{values.phone}</CardContent>
              <CardContent><b>Linkedin:  </b>{values.linkedin}</CardContent>
              <CardContent><b>Github:  </b>{values.github}</CardContent>
              
              <div style={{
                textAlign: "left"
              }} >
              <div style={{
                backgroundColor: '#b0a295'
                }}>
              <h1>Skills</h1>
              </div>
              <CardContent>{values.skills}</CardContent>

              <div style={{
                backgroundColor: '#b0a295'
                }}>
              <h1>Projects</h1>
              </div>

            <CardContent>
              <h2>{values.proTitle1}</h2>
              <b>Link: </b><a href={values.proLink1}>{values.proLink1}</a>
              <br />
              <p><b>Description:</b>{values.proDesc1}</p>
              <br />
              <h2>{values.proTitle2}</h2>
              <b>Link: </b><a href={values.proLink2}>{values.proLink2}</a>
              <br />
              <p><b>Description:</b>{values.proDesc2}</p>
              </CardContent>

              <div style={{
                backgroundColor: '#b0a295'
                }}>
              <h1>Experience</h1>
              </div>

              <CardContent>
              <h2>{values.expOrg1}</h2>
              <p><b>Position: </b>{values.expPos1}</p>
              <p><b>Duration: </b>{values.expDur1}</p>
              <p><b>Description: </b>{values.expDesc1}</p>
              <br />
              <h2>{values.expOrg2}</h2>
              <p><b>Position: </b>{values.expPos2}</p>
              <p><b>Duration: </b>{values.expDur2}</p>
              <p><b>Description: </b>{values.expDesc2}</p>
              </CardContent>

              <div style={{
                backgroundColor: '#b0a295'
                }}>
              <h1>Education</h1>
              </div>
              <CardContent>
              <h2>{values.eduSchool1}</h2>
              <p><b>Graduated: </b>{values.eduYear1}</p>
              <p><b>Qualification: </b>{values.eduQualification1}</p>
              <p><b>Description: </b>{values.eduDesc1}</p>
              <br />
              <h2>{values.eduSchool2}</h2>
              <p><b>Graduated: </b>{values.eduYear2}</p>
              <p><b>Qualification: </b>{values.eduQualification2}</p>
              <p><b>Description: </b>{values.eduDesc2}</p>
              </CardContent>
            </div>
          </Card>
          <br />
          <br />
        </Grid>
        </Grid>
          <Button style={{backgroundColor: '#7395AE', margin: 20}} variant="contained" onClick={this.back}>
              Back
            </Button>
            <Button style={{backgroundColor: '#7395AE', margin: 20}} variant="contained" onClick={this.submitted(payload)}>
              Finish
            </Button>
            </>
            
    )
  }
}
export default Success;