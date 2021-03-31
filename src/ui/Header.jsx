import React, { useState, useEffect } from "react";
import Link from "../Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

import ReactGA from "react-ga";

// ReactGA.pageview(window.location.pathname + window.location.search);

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
// makeStyes provides inline Theming(CSS) facility in Material-UI rather Global Theming which createMuiTheme provides.
// The following styles are compiled to inline css using jss compiler
// It is useful when a style is specific(private) to a particular component only.
// It is also when MU Style need to be overwritten.
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    textTransform: "none",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },

  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },

  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "50px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "&.MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [previousURL, setPreviousURL] = useState("");

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftwares",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About", link: "/about", activeIndex: 3 },
    { name: "Contact us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (route.activeIndex !== value) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }

          break;
        case "/estimate":
          if (value !== 5) {
            setValue(5);
          }
          break;

        default:
          break;
      }
    });

    // switch (window.location.pathname) {
    // 	case '/':
    // 		if (value !== 0) {
    // 			setValue(0);
    // 		}
    // 		break;
    // 	case '/services':
    // 		if (value !== 1) {
    // 			setValue(1);
    // 			setSelectedIndex(0);
    // 		}
    // 		break;
    // 	case '/customsoftwares':
    // 		if (value !== 1) {
    // 			setValue(1);
    // 			setSelectedIndex(1);
    // 		}
    // 		break;
    // 	case '/mobileapps':
    // 		if (value !== 1) {
    // 			setValue(1);
    // 			setSelectedIndex(2);
    // 		}
    // 		break;
    // 	case '/websites':
    // 		if (value !== 1) {
    // 			setValue(1);
    // 			setSelectedIndex(2);
    // 		}
    // 		break;
    // 	case '/revolution':
    // 		if (value !== 2) {
    // 			setValue(2);
    // 		}
    // 		break;
    // 	case '/about':
    // 		if (value !== 3) {
    // 			setValue(3);
    // 		}
    // 		break;
    // 	case '/contact':
    // 		if (value !== 4) {
    // 			setValue(4);
    // 		}
    // 		break;
    // 	case '/estimate':
    // 		if (value !== 5) {
    // 			setValue(5);
    // 		}
    // 		break;

    // 	default:
    // 		break;
    // }
  }, [value, setValue, selectedIndex, setSelectedIndex, menuOptions, routes]);

  const handleChange = (e, newValue) => setValue(newValue);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            style={{ textDecoration: "none" }}
          />
        ))}

        {/* <Tab className={classes.tab} label="Home" component={Link} to="/" />
				<Tab
					className={classes.tab}
					label="Services"
					component={Link}
					to="/services"
					aria-owns={anchorEl ? 'simple-menu' : undefined}
					aria-haspopup={anchorEl ? 'true' : undefined}
					onMouseOver={(event) => handleClick(event)}
				/>
				<Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
				<Tab className={classes.tab} label="About Us" component={Link} to="/about" />
				<Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" /> */}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => {
          setValue(5);
          ReactGA.event({
            category: "Estimate",
            action: "Desktop Header Pressed",
          });
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              classes={{
                selected: classes.drawerItemSelected,
              }}
              divider
              button
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          {/* <ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(0);
						}}
						divider
						button
						component={Link}
						to="/"
						selected={value === 0}
						classes={{ selected: classes.drawerItemSelected }}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Home
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(1);
						}}
						divider
						button
						component={Link}
						to="/services"
						selected={value === 1}
						classes={{ selected: classes.drawerItemSelected }}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Services
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(2);
						}}
						divider
						button
						component={Link}
						to="/revolution"
						selected={value === 2}
						classes={{ selected: classes.drawerItemSelected }}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							The Revolution
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(3);
						}}
						divider
						button
						component={Link}
						to="/about"
						selected={value === 3}
						classes={{ selected: classes.drawerItemSelected }}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							About
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(4);
						}}
						divider
						button
						component={Link}
						to="/contact"
						selected={value === 4}
						classes={{ selected: classes.drawerItemSelected }}
					>
						<ListItemText className={classes.drawerItem} disableTypography>
							Contact us
						</ListItemText>
					</ListItem> */}
          <ListItem
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
              ReactGA.event({
                category: "Estimate",
                action: "Mobile Header Pressed",
              });
            }}
            divider
            button
            component={Link}
            href="/estimate"
            selected={value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              style={{ textDecoration: "none" }}
              onClick={() => setValue(0)}
              disableRipple
            >
              <svg
                className={classes.logo}
                id="Layer_3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  Ace
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
              {/* safari and firefox doesn't render text tag inside img tag correctly */}
              {/* <img
                alt="company logo"
                src="/assets/logo.svg"
                className={classes.logo}
              /> */}
            </Button>
            <Hidden lgUp>{drawer}</Hidden>
            <Hidden mdDown>{tabs}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* creates margin space equal the height of the AppBar by calculating it dynamically (from toolbar default dimension) so that the content is not hidden under the appbar. */}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
