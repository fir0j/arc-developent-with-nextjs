import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },

  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "10px",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              className={classes.link}
            >
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Web App Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                style={{ textDecoration: "none" }}
                component={Link}
                href="/contact"
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorated slash"
        src="/assets/FooterAdornment.svg"
        className={classes.adornment}
      />
      <Grid
        container
        spacing={2}
        justify="flex-end"
        className={classes.socialContainer}
      >
        <Grid
          item
          className={classes.icon}
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <img alt="facebook logo" src="/assets/facebook.svg" />
        </Grid>
        <Grid
          item
          className={classes.icon}
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src="/assets/twitter.svg" />
        </Grid>
        <Grid
          item
          className={classes.icon}
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <img alt="instagram logo" src="/assets/instagram.svg" />
        </Grid>
      </Grid>
    </footer>
  );
}
