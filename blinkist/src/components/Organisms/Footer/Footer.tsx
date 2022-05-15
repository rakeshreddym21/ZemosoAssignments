import { Grid, StyledEngineProvider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { BlinkListAndIdeas } from "./BlinklistAndIdeas/BlinkListAndIdeas";
import { Company } from "./Company/Company";
import { Editorial } from "./Footer_Editorial/Editorial";
import { Sitemap } from "./Sitemap/Sitemap";
import { UsefulLinks } from "./UsefulLinks/UsefulLinks";

const useStyles = makeStyles({
  footer: {
    height: "370px",
    top: "111px",
    borderRadius: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "#F1F6F4",
  },
});

export const Footer: React.FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <div className={classes.footer}>
          <Grid container direction="column">
            <Grid item>
              <Grid container columnSpacing="32px">
                <Grid item sx={{ marginLeft: "244px" }}>
                  <BlinkListAndIdeas />
                </Grid>

                <Grid item>
                  {" "}
                  <Editorial />
                </Grid>

                <Grid item>
                  {" "}
                  <UsefulLinks />
                </Grid>

                <Grid item>
                  {" "}
                  <Company />
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              sx={{
                marginLeft: "244px",
                marginTop: "78px",
                marginBottom: "38px",
              }}
            >
              <Sitemap />
            </Grid>
          </Grid>
        </div>
      </StyledEngineProvider>
    </React.Fragment>
  );
};
