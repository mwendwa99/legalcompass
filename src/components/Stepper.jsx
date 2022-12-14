import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";

const steps = [
  {
    label: "Step 1 in the corridors of justice process",
    description: `For an unprejudiced and fair trial, the accused must be
              given a fair chance to defend himself. The accused must be
              informed of the charges against him and must be given a
              reasonable time and facilities to prepare his defence.
              The accused must be given the opportunity to confront and
              cross-examine the witnesses against him. The accused must be
              given the opportunity to present his defence witnesses and
              evidence. The accused must be given the opportunity to
              present his defence witnesses and evidence. The accused must
              be given the opportunity to present his defence witnesses and
              evidence.`,
    question: "Switch path?",
    nextPathId: 3,
    prevPathId: 0,
    currentPathId: 0,
  },
  {
    label: "Step 2 in the corridors of justice process",
    description: `An unprejudiced jury must be impaneled to try the accused. The jury
    must be selected at random from a fair cross-section of the
    community. The jury must be given clear and simple instructions
    on the law and the evidence. The jury must be given sufficient
    time to consider the evidence and reach a verdict. The jury must
    be sequestered during the trial. The jury must be given the
    opportunity to reach a unanimous verdict. The jury must be
    given the opportunity to reach a unanimous verdict. The jury
    must be given the opportunity to reach a unanimous verdict.
    `,
    question: "Switch path?",
    nextPathId: 0,
    prevPathId: 4,
    currentPathId: 1,
  },
  {
    label: "Step 3 in the corridors of justice process",
    description: `Try out different ad text to see what brings in the most customers,
    and learn how to enhance your ads using features like ad extensions.
    If you run into any problems with your ads, find out how to tell if
    they're running and how to resolve approval issues.`,
    question: "Switch path?",
    nextPathId: 4,
    prevPathId: 1,
    currentPathId: 2,
  },
  {
    label: "Step 4 in the corridors of justice process",
    description: `Try out different ad text to see what brings in the most customers,
    and learn how to enhance your ads using features like ad extensions.
    If you run into any problems with your ads, find out how to tell if
    they're running and how to resolve approval issues.`,
    question: "Switch path?",
    nextPathId: 2,
    prevPathId: 0,
    currentPathId: 3,
  },
  {
    label: "Step 5 in the corridors of justice process",
    description: `Try out different ad text to see what brings in the most customers,
    and learn how to enhance your ads using features like ad extensions.
    If you run into any problems with your ads, find out how to tell if
    they're running and how to resolve approval issues.`,
    question: "Switch path?",
    nextPathId: 2,
    prevPathId: 1,
    currentPathId: 4,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (id) => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // switch statement to go to step id
    switch (id) {
      case 1:
        setActiveStep(0);
        break;
      case 2:
        setActiveStep(1);
        break;
      case 3:
        setActiveStep(2);
        break;
      case 4:
        setActiveStep(3);
        break;
      case 5:
        setActiveStep(4);
        break;
      default:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = (id) => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // switch statement to go to step id
    switch (id) {
      case 1:
        setActiveStep(0);
        break;
      case 2:
        setActiveStep(1);
        break;
      case 3:
        setActiveStep(2);
        break;
      case 4:
        setActiveStep(3);
        break;
      case 5:
        setActiveStep(4);
        break;
      default:
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper
      elevation={3}
      sx={{ width: { xs: "100%", sm: "70%" }, background: "#d9d9d9", p: 2 }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Stack direction={"horizontal"}>
                <Typography color={"primary"} align="justify">
                  {step.description}
                </Typography>
                <Divider sx={{ p: 1, m: 1 }} orientation="vertical" flexItem />
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ fontStyle: "italic" }} color={"primary"}>
                    {step.question}
                  </Typography>
                  <Button
                    variant="text"
                    onClick={() => handleNext(step.nextPathId)}
                    sx={{ mt: 1, mr: 1 }}
                    color="primary"
                  >
                    Yes
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={() => handleBack(step.prevPathId)}
                    sx={{ mt: 1, mr: 1, color: "primary" }}
                  >
                    No
                  </Button>
                </Box>
              </Stack>

              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    color="primary"
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: "primary" }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Back to Step 1
          </Button>
        </Paper>
      )}
    </Paper>
  );
}
