import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white"
  },
  clickableIcon: {
    cursor: "pointer",
    color: "white",
    "&:hover": {
      color: "black"
    },
    marginLeft: 5
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Paper className={classes.root}>
        <Typography variant="subtitle1" className={classes.title}>
          Made with
          <Badge>
            <FavoriteIcon style={{ marginLeft: 3 }} />
          </Badge>{" "}
          by @quiko
          <Badge>
            <GitHubIcon
              onClick={event =>
                (window.location.href = "https://github.com/quiko")
              }
              className={classes.clickableIcon}
            />
          </Badge>
        </Typography>
      </Paper>
    </footer>
  );
}
