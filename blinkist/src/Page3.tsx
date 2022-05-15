import { StyledEngineProvider, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import MyAppBar from "./components/Organisms/AppBar/MyAppBar";
import AppBarWithCategories from "./components/Organisms/AppBarWithCategories/AppBarWithCategories";
import BeyondEntrepreneurship from "./components/Organisms/BeyondEntrepreneurship/BeyondEntrepreneurship";
import { Footer } from "./components/Organisms/Footer/Footer";

const useStyles = makeStyles({
  keyideas: {
    position: "absolute",
    height: "20px",
    left: "264px",
    top: "146px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
});
const Page3: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <StyledEngineProvider injectFirst>
      <div id="appbar">
        {value === 1 && <AppBarWithCategories handleChange={handleChange} />}
        {value === 0 && <MyAppBar handleChange={handleChange} />}
      </div>

      <div id="keyideas" style={{ marginTop: "60px", marginLeft: "264px" }}>
        <Typography className={classes.keyideas}>
          Get the key ideas from
        </Typography>
      </div>

      <div id="beyond" style={{ marginTop: "40px" }}>
        <BeyondEntrepreneurship />
      </div>

      <div id="footer" style={{ marginTop: "157px" }}>
        <Footer />
      </div>
    </StyledEngineProvider>
  );
};

export default Page3;
