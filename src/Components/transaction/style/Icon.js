import * as React from "react";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "grey",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "grey",
        },
    },
    [`&.${stepConnectorClasses.error}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "red",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
        backgroundColor: "green",
    }),
    ...(ownerState.completed && {
        backgroundColor: "green",
    }),
    ...(ownerState.error && {
        backgroundColor: "red",
    }),
}));

function ColorlibStepIcon(props) {
    console.log(props);
    const { active, completed, error, step } = props;

    const getStatusIcon = status => {
        if (status === "SUCCESS") {
            return <CheckIcon />;
        } else if (status === "FAILURE") {
            return <ReportProblemIcon />;
        } else {
            return <VideoLabelIcon />; // Fallback or default icon
        }
    };

    return <ColorlibStepIconRoot ownerState={{ completed, active, error }}>{getStatusIcon(step?.status)}</ColorlibStepIconRoot>;
}

export { ColorlibConnector, ColorlibStepIcon };
