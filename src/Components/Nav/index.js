import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: '100%',
    position: 'fixed',
    top: 0,
  },
  nav: {
    marginLeft: "auto"
  },
  toolbar: {
    flexWrap: "wrap"
  },
  link: {
    margin: theme.spacing(1, 2),
    color:'white',
  }
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <nav className={classes.nav}>
            <Button component={Link} to="/" className={classes.link}>
              Home
            </Button>

            <Button component={Link} to="/beers" className={classes.link}>
              Beers
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
