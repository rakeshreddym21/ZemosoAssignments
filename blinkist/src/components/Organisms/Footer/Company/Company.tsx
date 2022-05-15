import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    position: "static",
    width: "64px",
    height: "24px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#03314B",
    flex: "none",
    order: 0,
    flexGrow: 0,
  },
  element: {
    width: "214px",
    height: "24px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#6D787E",
    marginTop: "16px",
  },
});

export const Company: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container sx={{ width: "284px", height: "150px" }} direction="row">
      <Grid container direction="column">
        <Grid item>
          <Grid item>
            <Typography className={classes.title} variant="body1">
              Company
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.element} variant="body2">
              About
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.element} variant="body2">
              Careers
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.element} variant="body2">
              Partners
            </Typography>
          </Grid>

          <Grid item>
            <Typography className={classes.element} variant="body2">
              Code of Conduct
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
