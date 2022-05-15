import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { makeStyles } from "@material-ui/core/styles";
import { StyledEngineProvider } from "@mui/material/styles";

const useStyles = makeStyles({
  timeicon: {
    height: "20px",
    width: "20px",
    left: "2px",
    top: "2px",
    borderRadius: "0px",
  },
});
const TimeIcon: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <AccessTimeIcon className={classes.timeicon} />
    </StyledEngineProvider>
  );
};

export default TimeIcon;
