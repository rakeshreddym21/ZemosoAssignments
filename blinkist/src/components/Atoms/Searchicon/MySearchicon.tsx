import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  search: {
    color: "#042330",
    height: "29.391998291015625px",
    width: "29.391998291015625px",
    left: "2.961000442504883px",
    top: "1.96099853515625px",
    borderRadius: "0px",
  },
});
interface Props {
  handleSearch?: any;
}
const MySearchIcon: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <Button
      startIcon={<SearchIcon className={classes.search}></SearchIcon>}
      onClick={props.handleSearch}
    ></Button>
  );
};

export default MySearchIcon;
