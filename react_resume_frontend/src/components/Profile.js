import React, { useState, useEffect } from "react";
import { getResumes } from "../api";
import { Card, Grid, CardHeader, CardContent, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Profile(props) {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    getResumes().then((data) => {
      console.log("resumes", data);
      setResumes(data);
    });
  }, []);

  const mapResumes = () => {
    return resumes.map((resume) => {
      return (
        <Grid xs={8} item key={resume.id}>
          <Card>
            <CardHeader
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              title={resume.name}
            />
            <CardContent>
              <b>Contact: </b>
              {resume.phone}
            </CardContent>
            <CardContent>
              <b>Linkedin: </b>
              {resume.linkedin}
            </CardContent>
            <CardContent>
              <b>Github: </b>
              {resume.github}
            </CardContent>
          
            <div
              style={{
                textAlign: "left",
              }}
            >
              <div
                style={{
                  backgroundColor: "#b0a295",
                }}
              >
                <h1>Skills</h1>
              </div>
              <CardContent>{resume.skills}</CardContent>

              <div
                style={{
                  backgroundColor: "#b0a295",
                }}
              >
                <h1>Projects</h1>
              </div>

              <CardContent>
                <h2>{resume.project[0]}</h2>
                <b>Link: </b>
                <a href={resume.project[1]}>{resume.project[1]}</a>
                <br />
                <p>
                  <b>Description:</b>
                  {resume.project[2]}
                </p>
                <br />
                <h2>{resume.project[3]}</h2>
                <b>Link: </b>
                <a href={resume.project[4]}>{resume.project[4]}</a>
                <br />
                <p>
                  <b>Description:</b>
                  {resume.project[5]}
                </p>
              </CardContent>

              <div
                style={{
                  backgroundColor: "#b0a295",
                }}
              >
                <h1>Experience</h1>
              </div>

              <CardContent>
                <h2>{resume.experience[0]}</h2>
                <p>
                  <b>Position: </b>
                  {resume.experience[1]}
                </p>
                <p>
                  <b>Duration: </b>
                  {resume.experience[3]}
                </p>
                <p>
                  <b>Description: </b>
                  {resume.experience[2]}
                </p>
                <br />
                <h2>{resume.experience[4]}</h2>
                <p>
                  <b>Position: </b>
                  {resume.experience[5]}
                </p>
                <p>
                  <b>Duration: </b>
                  {resume.experience[7]}
                </p>
                <p>
                  <b>Description: </b>
                  {resume.experience[6]}
                </p>
              </CardContent>

              <div
                style={{
                  backgroundColor: "#b0a295",
                }}
              >
                <h1>Education</h1>
              </div>
              <CardContent>
                <h2>{resume.education[0]}</h2>
                <p>
                  <b>Graduated: </b>
                  {resume.education[2]}
                </p>
                <p>
                  <b>Qualification: </b>
                  {resume.education[1]}
                </p>
                <p>
                  <b>Description: </b>
                  {resume.education[3]}
                </p>
                <br />
                <h2>{resume.education[4]}</h2>
                <p>
                  <b>Graduated: </b>
                  {resume.education[6]}
                </p>
                <p>
                  <b>Qualification: </b>
                  {resume.education[5]}
                </p>
                <p>
                  <b>Description: </b>
                  {resume.education[7]}
                </p>
              </CardContent>
            </div>
          </Card>
          <br />
          <br />
        </Grid>
      );
    });
  };

  return (
    <>
      <h1>Profile</h1>
      <Grid container justify="center" spacing={2}>
        {mapResumes()}
        <Grid xs={12} item>
          <Button
            style={{ backgroundColor: "#7395AE" }}
            component={Link}
            to={"/userform"}
          >
            Create New Resume
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
