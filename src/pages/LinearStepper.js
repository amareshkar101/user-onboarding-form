import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "./LinearStepper.css";

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontWeight: "bold",
              marginLeft: "85px",
              marginTop: "60px",
              marginBottom: "10px",
            }}
          >
            Welcome! First things first...
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "125px",
              marginBottom: "30px",
              color: "#8a93a7",
            }}
          >
            You can always change them later.
          </Typography>

          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "70px",
              marginBottom: "0px",
            }}
          >
            Full Name
          </Typography>

          <TextField
            id="full-name"
            // label="Full Name"
            variant="outlined"
            placeholder="Enter Your Full Name"
            fullWidth
            margin="normal"
            name="firstName"
            style={{ marginTop: "5px", marginLeft: "75px", width: "350px" }}
          />
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "70px",
              marginBottom: "0px",
            }}
          >
            Display Name
          </Typography>

          <TextField
            id="display-name"
            // label="Display Name"
            variant="outlined"
            placeholder="Enter Your Display Name"
            fullWidth
            margin="normal"
            name="displayname"
            style={{
              marginTop: "5px",
              marginLeft: "75px",
              width: "350px",
              marginBottom: "20px",
            }}
          />
        </>
      );

    case 1:
      return (
        <>
          <Typography
            variant="h6"
            component="h2"
            style={{
              fontWeight: "bold",
              marginLeft: "75px",
              marginTop: "60px",
              marginBottom: "10px",
            }}
          >
            Let's set up a home for all your work
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "100px",
              marginBottom: "30px",
              color: "#8a93a7",
            }}
          >
            You can always create another workspace later
          </Typography>

          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "70px",
              marginBottom: "0px",
            }}
          >
            Workspace Name
          </Typography>
          <TextField
            id="workspace-name"
            // label="Workspace Name"
            variant="outlined"
            placeholder="Enter Workspace Name"
            fullWidth
            margin="normal"
            name="workspacename"
            style={{ marginTop: "5px", marginLeft: "75px", width: "350px" }}
          />
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "70px",
              marginBottom: "0px",
            }}
          >
            Workspace URL (optional)
          </Typography>

          <TextField
            id="workspace-url"
            // label="Workspace URL"
            variant="outlined"
            placeholder="Enter Workspace URL"
            fullWidth
            margin="normal"
            name="workspaceurl"
            style={{
              marginTop: "5px",
              marginLeft: "75px",
              width: "350px",
              marginBottom: "20px",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">www.eden.com/</InputAdornment>
              ),
            }}
          />
        </>
      );
    case 2:
      return (
        <>
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontWeight: "bold",
              marginLeft: "60px",
              marginTop: "60px",
              marginBottom: "10px",
            }}
          >
            How are you planning to use Eden?
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "100px",
              marginBottom: "30px",
              color: "#8a93a7",
            }}
          >
            We'll streamline your setup experience accordingly.
          </Typography>
          <div className="tile-main">
            <div className="tile-1">
              <BsFillPersonFill
                style={{
                  color: "#664de5",
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
              <p className="p-1">For myself</p>
              <p className="p-2">
                Write better. Think more clearly. Stay organized
              </p>
            </div>
            <div className="tile-2">
              <IoIosPeople
                style={{
                  color: "#664de5",
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
              <p className="p-1">With my team</p>
              <p className="p-2">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </div>
        </>
      );

    default:
      return "unknown step";
  }
}

function LinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const reset = () => {
    setActiveStep(0);
  };

  return (
    <div className="container">
      {/* <i class="fab fa-typo3" /> */}
      <Typography
        variant="h5"
        component="h2"
        style={{
          fontWeight: "bold",
          marginLeft: "200px",
          marginTop: "0px",
          marginBottom: "40px",
        }}
      >
        <i class="fab fa-typo3" />
        &nbsp;Eden
      </Typography>

      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 3 ? (
        <>
          <CheckCircleIcon
            style={{
              width: 60,
              height: 60,
              marginTop: 70,
              marginLeft: 220,
              color: "#664de5",
            }}
          />
          {/* <Typography variant="h3" align="center">
            Congratulations, Eden!
          </Typography> */}
          <Typography
            variant="h5"
            component="h2"
            style={{
              fontWeight: "bold",
              marginLeft: "120px",
              marginTop: "60px",
              marginBottom: "10px",
            }}
          >
            Congratulations, Eden!
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              marginLeft: "60px",
              marginBottom: "30px",
              color: "#8a93a7",
            }}
          >
            You have completed onboarding, you can start using the Eden!
          </Typography>

          <Button
            style={{
              textTransform: "none",
              marginLeft: "80px",
              width: "350px",
              padding: "7px",
              fontWeight: "500",
            }}
            variant="contained"
            onClick={reset}
          >
            Launch Eden
          </Button>
        </>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            style={{
              textTransform: "none",
              width: "350px",
              padding: "7px",
              fontWeight: "500",
              marginLeft: "75px",
            }}
            variant="contained"
            onClick={handleNext}
          >
            Create Workspace
          </Button>
        </>
      )}
    </div>
  );
}

export default LinearStepper;
