import React from 'react';
import fwdArrow from "../images/fwd-arrow.png";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "60px",
        height: "50px",
        backgroundColor: "#273579",
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        justifyContent: "center",
    },
}));    

export default function CustomButton() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.root}>
              <img width="35%" src={fwdArrow}></img>
            </Box>
        </React.Fragment>
    )
}
