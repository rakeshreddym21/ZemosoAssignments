import { ExpandLess } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  expandless: {
    height: "7.7779998779296875px",
    width: "12.72800064086914px",
    left: "5.6360015869140625px",
    top: "8.22198486328125px",
    borderRadius: "0px",
    color: "#042330",
  },
});
interface Props {
  classNameStyle?: string;
}

const UpArrow: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Button
        startIcon={
          <IconButton>
            <ExpandLess
              className={
                props.classNameStyle ? props.classNameStyle : classes.expandless
              }
            ></ExpandLess>
          </IconButton>
        }
        variant="text"
      ></Button>
    </>
  );
};

export default UpArrow;
