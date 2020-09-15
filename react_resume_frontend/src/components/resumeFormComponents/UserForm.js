import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import Success from "./Success";
import Profile from "../Profile";

class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: "",
//experience
    expOrg1: "",
    expPos1: "",
    expDesc1: "",
    expDur1: "",

    expOrg2: "",
    expPos2: "",
    expDesc2: "",
    expDur2: "",
//education
    eduSchool1: "",
    eduYear1: "",
    eduQualification1: "",
    eduDesc1: "",

    eduSchool2: "",
    eduYear2: "",
    eduQualification2: "",
    eduDesc2: "",
//project
    proTitle1: "",
    proLink1: "",
    proDesc1: "",

    proTitle2: "",
    proLink2: "",
    proDesc2: "",

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

 
  render() {
    const { step } = this.state;
    const {
      name,
      phone,
      linkedin,
      github,
      skills,
      expOrg1,
      expPos1,
      expDesc1,
      expDur1,
      expOrg2,
      expPos2,
      expDesc2,
      expDur2,
      eduSchool1,
      eduYear1,
      eduQualification1,
      eduDesc1,
      eduSchool2,
      eduYear2,
      eduQualification2,
      eduDesc2,
      proTitle1,
      proLink1,
      proDesc1,
      proTitle2,
      proLink2,
      proDesc2,
    } = this.state;

    const values = {
      name,
      phone,
      linkedin,
      github,
      skills,
      expOrg1,
      expPos1,
      expDesc1,
      expDur1,
      expOrg2,
      expPos2,
      expDesc2,
      expDur2,
      eduSchool1,
      eduYear1,
      eduQualification1,
      eduDesc1,
      eduSchool2,
      eduYear2,
      eduQualification2,
      eduDesc2,
      proTitle1,
      proLink1,
      proDesc1,
      proTitle2,
      proLink2,
      proDesc2,
    };

    switch (step) {
      case 1:
        return (
          <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">
              <PersonalDetails
                values={values}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );

      case 2:
        return (
          <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">
              <Experience
                values={values}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );

      case 3:
        return (
          <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">
              <Project
                values={values}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );

      case 4:
        return (
          <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">
              <Education
                values={values}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );

      case 5:
        return (
          <div className="App pt-5 mt-5">
            <div className="container col-lg-8 mx-auto text-center">
              <Success
              values={values}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              />
            </div>
            <br />
          </div>
        );

        case 6:
          return (
            <Profile />
          );
    }
  }
}

export default UserForm;
