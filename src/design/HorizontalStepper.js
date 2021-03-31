import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const useStyles = makeStyles((theme) => ({
    stepperHorizontal: {
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "3px",
        margin: "40px auto",
        padding: "30px",
        width: "80%",
    },
    stepWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "23.2%",
        position: 'relative',
    },
    stepNumber: {
        borderRadius: "80%",
        border: "1px solid grey",
        width: "30px",
        height: "30px",
        padding: "3px",
        textAlign: "center",
        marginBottom: "1.2rem",
    },
    dividerLine: {
        height: '6px',
        background: "#c31432",
        background: "-webkit-linear-gradient(to right, #240b36, #c31432)",
        background: "linear-gradient(to right, #240b36, #c31432)",
        position: 'absolute',
        width: '100%',
        top: '32%', 
        left: '55%',
    }
}))


export default function HorizontalStepper() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.stepperHorizontal}>
                <Box className={classes.stepWrapper}>
                    <Box className={classes.stepNumber}></Box>
                    <Box className={classes.dividerLine}></Box>
                </Box>

                <Box className={classes.stepWrapper}>
                    <Box className={classes.stepNumber}></Box>
                    <Box className={classes.dividerLine}></Box>
                </Box>

                <Box className={classes.stepWrapper}>
                    <Box className={classes.stepNumber}></Box>
                    <Box className={classes.dividerLine}></Box>
                </Box>

                <Box className={classes.stepWrapper}>
                    <Box className={classes.stepNumber}></Box>
                    <Box className={classes.dividerLine}></Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
