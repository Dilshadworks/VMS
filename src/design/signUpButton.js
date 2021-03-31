import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    width: "450px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    letterSpacing: "3px",
    fontSize: "22px",
    fontWeight: "600",
    height: "55px",
    fontFamily: "Poppins",
    marginRight: "26px",
    backgroundColor: "#008AB7",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#008AB7"
    }
  },
  label: {
    textTransform: "uppercase",
  },
})(Button);

export function SignUpButton(props) {
  const { classes, children } = props;
  return (
    <StyledButton>
      <b>{children}</b>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="40px"
        height="40px"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </svg>
    </StyledButton>
  );
}
