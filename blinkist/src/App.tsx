import React, { useState } from "react";

import MyLibraryTitle from "./components/Atoms/MylibraryTitle/MyLibraryTitle";
import MyTabs from "./components/Atoms/Tabs/MyTabs";
import MyAppBar from "./components/Organisms/AppBar/MyAppBar";
import AppBarWithCategories from "./components/Organisms/AppBarWithCategories/AppBarWithCategories";
import { Footer } from "./components/Organisms/Footer/Footer";
import {useAuth0} from '@auth0/auth0-react';
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    (
      <button onClick={() => logout()}>
        Log Out
      </button>
    )
  )
}

function App() {
  const { isAuthenticated }=useAuth0();
  const [value, setValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  const handleSearchTerm = (
    e: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
    newValue: string
  ) => {
    setSearchTerm(newValue);
  };

  const closeSearch = () => {
    setSearchTerm("");
  };

  return ( 
    <>
      <div id="appbar">
        {value === 1 && <AppBarWithCategories handleChange={handleChange} />}
        {value === 0 && (
          <MyAppBar
            handleChange={handleChange}
            handleSearchTerm={handleSearchTerm}
            closeSearch={closeSearch}
          />
        )}
      <div>
        <LogoutButton />
      </div>
        <div
          id="librarytitle"
          style={{ paddingLeft: "264px", marginTop: "89px" }}
        >
          <MyLibraryTitle />
        </div>

        <div id="mytabs" style={{ paddingLeft: "264px" }}>
          <MyTabs searchTerm={searchTerm} />
        </div>
      </div>

      <Footer />
      <div>
      <LogoutButton />
      </div>
    </>
  );
}

export default App;
