import * as React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, ColorlibStepIcon } from "./style/Icon";

const STEPS = ["request push", "std-notification", "ccs-notification"];

function getStepIcons({ data }) {
    return STEPS.map((label, i) => {
        const labelProps = {};
        if (data.steps[i] && data.steps[i].status === "FAILURE") {
            labelProps.error = true;
        }
        return (
            <Step key={label}>
                <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon} StepIconProps={{ step: data.steps[i] }}>
                    {label}
                </StepLabel>
            </Step>
        );
    });
}

//응답값이 넘어온다.
//응답을 분석해서 아이콘을 생성한다.
export default function TransactionStepper(props) {
    return (
        <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper alternativeLabel activeStep={props.data.activeStep} connector={<ColorlibConnector />}>
                {getStepIcons(props)}
            </Stepper>
        </Stack>
    );
}
