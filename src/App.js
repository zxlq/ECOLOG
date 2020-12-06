import * as React from "react";
import { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
 import Drawer from "@material-ui/core/Drawer";
 import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Container from "@material-ui/core/Container";
import CreditCardIcon from '@material-ui/icons/CreditCard';
//side buttons

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DashboardIcon from "@material-ui/icons/Dashboard";


import CardContent1 from "./CardContent1";
import CardContent2 from "./CardContent2";
import CardContent3 from "./CardContent3";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.EcoLog.ie/">
        EcoLog.ie
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    height: 280
  },
  fixedHeight: {
    height: 280,
    textAlign: "center",
    imgAlign: "center"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      choice: "None",
      variableForDashBoard: 10
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.ButtonCardContent1Action = this.ButtonCardContent1Action.bind(this);
    this.ButtonCardContent2Action = this.ButtonCardContent2Action.bind(this);
    this.ButtonCardContent3Action = this.ButtonCardContent3Action.bind(this);
  }

  ButtonCardContent1Action() {
    let curA = this.state.variableForDashBoard;

    this.setState({ variableForDashBoard: curA });
    this.setState({ choice: "A" });
    //console.log(" BUTTON PRESSED:LOG");
  }

  ButtonCardContent2Action() {
    let curB = this.state.variableForLog;

    this.setState({ variableForDashBoard: curB });
    this.setState({ choice: "B" });
  }

  ButtonCardContent3Action() {
    let curC = this.state.variableForSpend;

    this.setState({ variableForDashBoard: curC });
    this.setState({ choice: "C" });
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, this.open && classes.appBarShift)}
          style={{ background: "#28c180" }}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggle.bind(this)}
              className={clsx(
                classes.menuButton,
                this.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              EcoLog Carbon Offset Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !this.open && classes.drawerPaperClose
            )
          }}
          open={this.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleToggle.bind(this)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ListItem button onClick={this.ButtonCardContent1Action}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Log Eco Credits" />
            </ListItem>
            <ListItem button onClick={this.ButtonCardContent2Action}>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="Log Eco Credits" />
            </ListItem>

            <ListItem button onClick={this.ButtonCardContent3Action}>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary="Log Eco Credits" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {this.state.choice === "A" && (
              <CardContent1 varA={this.state.variableForDashBoard} />
            )}

            {this.state.choice === "B" && (
              <CardContent2 varB={this.state.variableForLog} />
            )}
            {this.state.choice === "C" && (
              <CardContent3 varB={this.state.variableForSpend} />
            )}
          </Container>
          <Box pt={4}>
            <Copyright />
          </Box>
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(App);
