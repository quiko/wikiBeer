import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFetch } from "../../Hooks/fetchHook";
import BeerTable from "./Table";
import Home from "../Home/index";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 750,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    boxShadow: "2px 2px 6px  rgba(0, 0, 0, 0.4)"
  },
  card: {
    marginBottom: "35px"
  },
  shadow: {
    boxShadow: "2px 2px 6px  rgba(0, 0, 0, 0.4)"
  },
  title: {
    textAlign: "center",
    color: "#FF8E53 ",
    textJustify: "center"
  }
}));

export default function BeerList() {
  const url = "https://api.punkapi.com/v2/beers/";
  const classes = useStyles();
  const { Data } = useFetch(url, []);

  return Data.length === 0 ? (
    <Grid container spacing={2} justify="center" alignItems="center">
      <CircularProgress color="secondary" />
    </Grid>
  ) : (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          className={classes.card}
        >
          <Home />
        </Grid>
        <Grid container spacing={2} justify="center" alignItems="center">
          <BeerTable Data={Data} />
        </Grid>
      </Paper>
    </div>
  );
}
