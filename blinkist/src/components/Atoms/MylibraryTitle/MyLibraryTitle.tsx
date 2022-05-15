import { StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  library: {
    position: "absolute",
    width: "250px",
    height: "45px",
    left: "264px",
    top: "145px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "45px",
    color: "#03314B",
  },
});

const MyLibraryTitle: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <Typography className={classes.library}>My Library</Typography>
    </StyledEngineProvider>
  );
};
export default MyLibraryTitle;
