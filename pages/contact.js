import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.75rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  // });
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const [loading, setLoading] = useState(false);

  // shortening to single change handler for multiple inputs
  const handleChange = (event) => {
    event.preventDefault();
    let valid;

    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        valid = /^[a-zA-Z ]+[a-zA-Z]+$/.test(event.target.value);
        if (!valid) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^[0-9+]{10,14}$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onSendConfirm = () => {
    setLoading(true);
    axios
      .get("https://bvq8ew8osl.execute-api.ap-south-1.amazonaws.com/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message Sent Successfully",
          backgroundColor: "#4BB543",
        });
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
        console.log(err);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        alt="paper airplane"
        src="/assets/send.svg"
        style={{ marginLeft: "1em" }}
      />
    </React.Fragment>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta property="og:url" content="arc.com/contact" key="og:url" />
        <meta rel="canonical" href="https://arc.com/contact" key="canonical" />
      </Head>
      {/* row 1 */}
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          margingBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item style={{ maxWidth: "20em" }}>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography
              variant="h1"
              style={{ lineHeight: 1 }}
              align={matchesMD ? "center" : undefined}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              style={{ color: theme.palette.common.blue }}
              align={matchesMD ? "center" : undefined}
            >
              We're waiting.
            </Typography>
          </Grid>

          <Grid item style={{ marginTop: "2em" }}>
            <Grid item container>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:+9779847064013"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (+977) 9847064013
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:firoj.is.available@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    firoj.is.available@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container direction="column" style={{ marginTop: "2em" }}>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={nameHelper.length !== 0}
                helperText={nameHelper}
                label="Name"
                id="name"
                type="name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                label="Phone"
                id="phone"
                type="phone"
                value={phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              placeholder="Tell us more about your project"
              value={message}
              className={classes.message}
              id="message"
              multiline
              rows={10}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>

          <Grid item style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Button
              variant="contained"
              className={classes.sendButton}
              disabled={
                name.length === 0 ||
                nameHelper.length !== 0 ||
                email.length === 0 ||
                emailHelper.length !== 0 ||
                phone.length === 0 ||
                phoneHelper.length !== 0 ||
                message.length === 0
              }
              onClick={() => setOpen(true)}
            >
              {buttonContents}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {/* It doesn't matter where we place this  component */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={nameHelper.length !== 0}
                helperText={nameHelper}
                label="Name"
                id="name"
                type="name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                label="Phone"
                id="phone"
                type="phone"
                value={phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              value={message}
              className={classes.message}
              id="message"
              multiline
              rows={10}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                style={{ fontWeight: 300 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  nameHelper.length !== 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  message.length === 0
                }
                onClick={onSendConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      {/* row 2 */}
      <Grid
        item
        container
        className={classes.background}
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "5em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid item>
            <Typography variant="h1" align={matchesMD ? "center" : undefined}>
              Simple Software. <br /> Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontSize: "1.5rem" }}
              align={matchesMD ? "center" : undefined}
            >
              Take advantage of 21st Century.
            </Typography>
            <Grid item container justify={matchesMD ? "center" : undefined}>
              <Button
                variant="outlined"
                className={classes.learnButton}
                style={{ color: theme.palette.common.blue }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                <span
                  style={{
                    marginRight: 5,
                  }}
                >
                  Learn More
                </span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            href="/estimate"
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
