import React, { Component } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Typography, Box, Grid, Container } from "@material-ui/core";
import "fontsource-poppins";
import Image from "../images/introlayer.png";
import rebot from "../images/rebot.png";
import phone from "../images/phone-image.png";
import { SignUpButton } from "./signUpButton";
import { theme } from "./theme";
import CustomButton from "./CustomButton";
import HorizontalStepper from "./HorizontalStepper";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "100vh",
    width: "100%",
    display: "block",
    position: "relative",
  },
  blogTitle: {
    paddingBottom: "60px",
  },
  blogContainer: {
    padding: "110px",
  },
  blogSubTitle: {
    paddingBottom: "55px",
  },
  featuredPhoto: {
    height: "614px",
  },
  media:{
    objectFit: 'contain',
    objectPosition: 'center',
  }
}));

export default function Intro0() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.hero}>
        
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="flex-end" component="div">
            <SignUpButton>take me to quick sign up</SignUpButton>
          </Box>
        </Container>

        <Container maxWidth="xl" className={classes.blogContainer}>
          
          <Grid container>
            <Grid items xs={12} sm={12} md={12} lg={8}>
              <Typography
                className={classes.blogTitle}
                variant="h1"
                component="h1"
                color="primary"
              >
                Welcome to Home Lending Pal’s AI-assisted Sign-Up
              </Typography>
              <Typography
                className={classes.blogSubTitle}
                variant="body1"
                align="left"
                color="textPrimary"
              >
                Powered by IBM WATSON, Our mortgage research software simulates
                underwriting to determine home loan affordability and compare
                lenders, all in just under 15 minutes.
              </Typography>
              <Typography
                className={classes.blogSubTitle}
                variant="body1"
                align="left"
                color="textPrimary"
              >
                Even better, we donate 2% of all profits back to charities and
                non-profit organizations. This process will assist in setting up
                your profile.
              </Typography>
              <Box fontWeight="fontWeightBold" fontStyle="italic" fontSize={24}>
                Ready to go?
              </Box>
            </Grid>
            
            <Grid items xs={12} sm={12} md={12} lg={4}>
              <Box className={classes.featuredPhoto}>
                <img width="100%" height='100%' component="img" className={classes.media} src={phone}></img>
              </Box>
            </Grid>
          
          </Grid>
        </Container>

        <Container maxWidth="xl">
          <Box
            className={classes.mainTagLine}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Typography variant="h4" color="secondary">
              Let us help you get started! Use the arrow keys to navigate.
            </Typography>
            <CustomButton></CustomButton>
          </Box>
        </Container>

        <Container maxWidth="xl">
        <HorizontalStepper />
        </Container>

      </Box>
    </ThemeProvider>
  );
}
