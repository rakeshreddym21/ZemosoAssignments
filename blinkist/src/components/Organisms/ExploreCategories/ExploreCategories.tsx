import { Box, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ExploreByCategory from "./ExploreByCategory";
import RecentlyAddedTitles from "./RecentlyAddedTitles";
import PopularTitles from "./Populartitles";
import Headers from "./Headers";

const useStyles = makeStyles({
  grid: {
    height: "650px",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
    backgroundColor: "#F1F6F4",
  },
});

const ExploreCategories: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Grid container direction="column">
        <Grid item style={{ marginLeft: "358px", marginTop: "32px" }}>
          {" "}
          <Headers />{" "}
        </Grid>

        <Grid item>
          <hr style={{ color: "#042330", marginTop: "24px" }}></hr>
        </Grid>

        <Grid item style={{ marginLeft: "358px" }}>
          <Grid container columnSpacing="130px">
            <Grid item style={{ marginTop: "32px" }}>
              {" "}
              <ExploreByCategory />{" "}
            </Grid>

            <Grid item style={{ marginTop: "32px" }}>
              {" "}
              <RecentlyAddedTitles />{" "}
            </Grid>

            <Grid item style={{ marginTop: "32px" }}>
              {" "}
              <PopularTitles />{" "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      ></Box>
    </div>
  );
};

export default ExploreCategories;
