import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  div: {
    display: "flex",
    justifyContent: "center",
  },
});
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <LoginButton />
    </div>
  );
}

export default HomePage;
