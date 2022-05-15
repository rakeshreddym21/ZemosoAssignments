import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  createTheme,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { AccessTime } from "@mui/icons-material";
import UserIcon from "../../Atoms/UserIcon/UserIcon";
import theme from "../../themes/theme";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#E1ECFC",
//     },
//   },
// });

const useStyles = makeStyles({
  bookName: {
    color: "#03314B",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    paddingTop: "23px",
  },
  card: {
    background: "#FFFFFF",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: "296px",
    height: "500px",
  },
  author: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    paddingTop: "16px",
    color: "#6D787E",
    width: "95px",
    height: "20px",
  },
  read: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
    paddingTop: "17px",
    paddingLeft: "5.67px",
  },
  reads: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
    height: "18px",
    width: "64px",
    left: "24px",
    top: "1px",
    borderRadius: "nullpx",
    paddingLeft: "1px",
  },
  time: {
    height: "16.666667938232422px",
    width: "16.666667938232422px",
    left: "1.6666669845581055px",
    top: "1.66650390625px",
    borderRadius: "0px",
    paddingTop: "17.37px",
  },
  progress: {
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
    top: "21px",
    height: "15px",
    width: "284px",
    left: "0px",
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#E1ECFC",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#E1ECFC",
    },
  },
  userIcon: {
    height: "17.5px",
    width: "13.333332061767578px",
    left: "3.3333282470703125px",
    top: "0.83349609375px",
    borderRadius: "0px",
    paddingLeft: "47.33px",
  },
});

interface Props {
  id:number;
  bookName: string;
  author: string;
  readTime: string;
  reads: string;
  image:string;
  children?: any;
  type:string;
}
const BookCard: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Card variant="outlined" className={classes.card}>
          <CardMedia component="img" image={props.image} height="292" />
          <CardContent>
            <Typography variant="subtitle1" className={classes.bookName}>
              {props.bookName}
            </Typography>
            <Typography className={classes.author}>{props.author}</Typography>
            <AccessTime className={classes.time} />
            <Typography variant="caption" className={classes.read}>
              {props.readTime}
            </Typography>
            <UserIcon className={classes.userIcon} />
            <Typography variant="caption" className={classes.reads}>
              {props.reads}
            </Typography>
          </CardContent>
          {props.children}
        </Card>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default BookCard;
