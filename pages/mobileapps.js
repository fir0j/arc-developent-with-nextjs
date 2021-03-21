import React from "react";
import Head from "next/head"
import Lottie from "react-lottie";
import Link from "../src/Link"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import IntegrationAnimation from "../src/animations/integrationAnimation/data.json";
import CallToAction from "../src/ui/CallToAction";



const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function MobileApps({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: IntegrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | Arc Development
        </title>
        <meta name="description" key="description" content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully desined, carefully crafted apps for both iOS and Android."/>
        <meta property="og:title" content="Bringing West Coast Technology to the Midwest | iOS/Android App Development" key="og:title"/>
        <meta property="og:url" content="arc.com/mobileapps" key="og:url" />
        <meta rel="canonical" href="https://arc.com/mobileapps" key="canonical"/>
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/customsoftwares"
              onClick={() => setSelectedIndex(1)}
            >
              <img
                alt="back to the custom software development page"
                src="/assets/backArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile Apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether you an app for customer, employee or yourself, We can
              build cross platform native solutions for any part of your
              business process. This opens you up to a whole world of
              possibilities by taking advantage of phone features like the
              CAMERA, GPS, PUSH NOTIFICATIONS and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convinience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/websites"
              onClick={() => setSelectedIndex(3)}
            >
              <img
                alt="forward to Website Development Page"
                src="/assets/forwardArrow.svg"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* begining of  new container */}
      <Grid
        item
        container
        justify="center"
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md>
          <Grid item align={matchesSM ? "center" : undefined}>
            <Typography variant="h4"> Integration</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications putting everything you need in one convinient
              place.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              This allows you to extend your reach, reinvent intractions and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: matchesMD ? "15em":"20em", height: matchesMD ? "20em":undefined }} />
        </Grid>

        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align={matchesSM ? "center" : "right"}>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              Our cutting-edge development process allows us to create apps for
              iphone, andoroid and tablets - all at same time.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              This signinficantly reduces costs and creates a unified brand
              experience across all device.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* begining of  new container */}
      <Grid
        item
        container
        justify="center"
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15em", display:matchesMD ? "grid":undefined }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/swissKnife.svg"
              alt="swiss arm knife"
              style={{ maxWidth: "28em" }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/extendAccess.svg"
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>

        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" gutterBottom align="center">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img
              src="/assets/increaseEngagement.svg"
              alt="app with notification"
              style={{ maxWidth: "28em" }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* begining of new container */}
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>

      {/* end of top most container */}
    </Grid>
  );
}
