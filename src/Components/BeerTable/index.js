import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { useFetch } from "../../Hooks/fetchHook";
import BeerTable from "./Table";

const useStyles = makeStyles({
  shadow: {
    boxShadow: "2px 2px 6px  rgba(0, 0, 0, 0.4)"
  },
  title: {
    textAlign: "center",
    color: "#FF8E53 "
  }
});

export default function BeerList() {
  const url = "https://api.punkapi.com/v2/beers/";
  const classes = useStyles();
  const { Data } = useFetch(url, []);

  return (
    <Grid container>
      <Grid item xs>
        <Card className={classes.shadow}>
          <CardHeader
            className={classes.title}
            title="Discover the finest beers !"
          ></CardHeader>
          <CardContent>
            <BeerTable Data={Data} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
