import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import "./index.css";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { Link } from 'react-router-dom';

import HomePage from './components/Organisms/HomePage/HomePage';
import { textAlign } from '@mui/system';
const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;

  return (
    (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export function Auth(){
  const {loginWithRedirect,  isAuthenticated,isLoading } = useAuth0();
  if (isLoading) return <div ><h1 style={{textAlign:"center"}}>Loading...</h1></div>

if(isAuthenticated){
  return(   
  <Router >
      <Routes>
        <Route path="/explore" element={<Page2 />} />
        <Route path="/" element={ <App />} />
        <Route path="/bookdetail" element={<Page3 />} />
      </Routes>
    </Router>)
}

else{
  // return(!isAuthenticated && <LoginButton/>)
  return <HomePage />
//  return <Link onClick={() => loginWithRedirect()} to={''loginWithRedirect()}  />
 }
  
}