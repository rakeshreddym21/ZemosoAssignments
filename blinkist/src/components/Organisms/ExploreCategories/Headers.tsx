import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  name: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E",
  },
});

const Headers: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Grid container columnSpacing="130px">
            <Grid item>
              <Typography style={{ color: "#116BE9" }} className={classes.name}>
                Explore by Category
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.name}>
                See recently added titles
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.name}>
                See popular titles{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Headers;
