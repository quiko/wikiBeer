import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "transparent"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const DescriptionPanel = ({ name, description }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.main}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{description}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default DescriptionPanel;
