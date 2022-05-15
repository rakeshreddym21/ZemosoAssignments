import { Button, IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const useStyles = makeStyles({
  expandmore: {
    height: "12.7779998779296875px",
    width: "15.72800064086914px",
    left: "5.6360015869140625px",
    top: "8.22198486328125px",
    borderRadius: "0px",
    color: "#042330",
  },
});
interface Props {
  classNameStyle?: string;
}

const DownArrow: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Button
        startIcon={
          <IconButton>
            <KeyboardArrowDownIcon
              className={classes.expandmore}
            ></KeyboardArrowDownIcon>
          </IconButton>
        }
        variant="text"
      ></Button>
    </>
  );
};

export default DownArrow;
