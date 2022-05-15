import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import blinklist from "../images/Blinklistlogo.png";

const useStyles = makeStyles({
  logo: {
    height: "26px",
    width: "124.09px",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
  },
});

interface Props {}

const BlinkListLogo: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <img className={classes.logo} src={blinklist} alt="BlinkList" />
    </div>
  );
};

export default BlinkListLogo;
