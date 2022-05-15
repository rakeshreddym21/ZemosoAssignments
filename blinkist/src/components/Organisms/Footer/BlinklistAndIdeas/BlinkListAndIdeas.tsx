import { Grid, Typography } from "@mui/material";
import BlinkListLogo from "../../../Atoms/Blinklistlogo/Blinklistlogo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bigideas: {
    position: "static",
    width: "328px",
    height: "64px",
    left: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    color: "#0365F2",
    flex: "none",
    order: 1,
    flexGrow: 0,
  },
});

export const BlinkListAndIdeas: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container sx={{ width: "378px", height: "128px" }} direction="row">
      <Grid item sx={{ height: "26px", width: "124px" }}>
        <BlinkListLogo />
      </Grid>

      <Grid sx={{ marginTop: "32px" }} item>
        <Typography variant="subtitle1" className={classes.bigideas}>
          Big ideas in small packages. Start learning now
        </Typography>
      </Grid>
    </Grid>
  );
};
