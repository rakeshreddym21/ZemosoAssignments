import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    width: "658px",
  },
});
const SearchBar: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="search"
        label="Search by title or author"
        className={classes.textField}
        variant="standard"
      ></TextField>
    </div>
  );
};

export default SearchBar;
