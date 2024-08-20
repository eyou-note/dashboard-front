import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Box from "@mui/material/Box";

export default function TransactionLog({ data }) {
    const handleCopy = text => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert("Transaction log copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };
    const titles = ["Push 발송 요청(Domains)", "Std-Notification", "CCS-Notification"];

    return (
        <div>
            {data.steps.map((step, index) => (
                <Accordion
                    key={index}
                    disabled={step.status === "DISABLED"}
                    defaultExpanded={step.status !== "DISABLED"}
                    sx={{
                        opacity: step.status === "DISABLED" ? 0.5 : 1,
                        pointerEvents: step.status === "DISABLED" ? "none" : "auto",
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                        <Typography>{titles[step.phase]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Typography>{step.transactionLog}</Typography>
                            <Button variant="outlined" startIcon={<ContentCopyIcon />} size="small" onClick={() => handleCopy(step.transactionLog)} sx={{ marginLeft: "auto" }}>
                                Copy
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
