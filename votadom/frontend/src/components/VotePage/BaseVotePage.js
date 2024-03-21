import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProgressMobileStepper from "./ProgressMobileStepper";
import CollegeForm from "./Steps/CollegeForm";
import DocumentValidator from "./Steps/DocumentValidator";

const page_steps = [
    { 
        step: 1,
        step_name: "Valida tu identidad",
        Component: DocumentValidator
    },
    { 
        step: 2,
        step_name: "Ingrea tu Colegio Electoral",
        Component: CollegeForm
    },
    { 
        step :3,
        step_name: "Elige a tus Diputados",
        Component: () => {return <Typography variant="h4">Elige a tus Diputados</Typography>}
    },
    { 
        step: 4,
        step_name: "Elige a tu Senador",
        Component:  () => {return <Typography variant="h4">Elige a tu Senador</Typography>}
    },
    { 
        step: 5,
        step_name: "Elige a tu Presidente",
        Component:  () => {return <Typography variant="h4">Elige a tu Presidente</Typography>}
    },
    { 
        step: 6,
        step_name: "Confirma tu voto",
        Component:  () => {return <Typography variant="h4">Confirma tu voto</Typography>}
    },
]


export default function BaseVotePage (props){
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const ActiveComponent = page_steps[activeStep].Component;

    
    return <Grid container spacing={1}>
            <Grid container item xs={12} sx={{height: "max-content", boxShadow: "1px 0px 3px rgba(0, 0, 0, 0.3)"}}>
                <Grid item xs={6}>
                    <Typography  color="#0d1b3c"
                        variant="h5" component="h1" 
                        sx={
                                {
                                    fontFamily: "Montserrat Alternates",  fontWeight: 600,
                                    textShadow: "0px 1px 2px rgba(13, 27, 60, 0.5)", padding:2
                                }
                            }
                    >
                        VotaDominicana
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <ActiveComponent />
                {activeStep}
            </Grid>
            <Grid container item xs={12} alignItems={"flex-end"}>
                <ProgressMobileStepper 
                    handleNext={handleNext}
                    handleBack={handleBack}
                    activeStep={activeStep} 
                    stepPagesCount={page_steps.length}

                />
            </Grid>
        </Grid>;
};
