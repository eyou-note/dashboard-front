import React, { useState } from "react";
import TransactionStepper from "./TransactionStepper";
import TransactionLog from "./TransactionLog";
import Box from "@mui/material/Box";

const data2 = {
    status: "FAILURE",
    activeStep: 0,
    steps: [
        {
            status: "FAILURE",
            phase: 0,
            transactionLog: "PHASE 0 Transaction Log..",
        },
        {
            status: "DISABLED",
            phase: 1,
            transactionLog: "PHASE 1 Transaction Log..",
        },
    ],
};

export default function TransactionResult(props) {
    const { data } = props;
    return (
        <>
            <Box>
                <TransactionStepper data={data} />
                <TransactionLog data={data} />
            </Box>
        </>
    );
}
