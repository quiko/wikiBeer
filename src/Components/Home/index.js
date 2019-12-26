import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import  Typography  from "@material-ui/core/Typography";
import beer from "../../assets/images/beer.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    maxWidth: 445,
    height: 280,
    boxShadow: "2px 2px 6px  rgba(0, 0, 0, 0.4)"
  },
  button: {
    color: "#FF8E53 "
  },
  title: {
    color: "#FF8E53 ",
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="beer and flowers"
            height="140"
            image={beer}
            title="beer and flowers"
          />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Thirsty ? Discover our finest beers.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello beer lover ! this database will inform you about the finest
              beers .
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Home;
