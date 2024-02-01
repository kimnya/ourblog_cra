import React, { createContext, useState } from "react";
import App from "../App";

const ToggleCtx = createContext(null);
const ToggleProvider = () => {
  const [isTogle, setTogle] = useState({
    sideBar: false,
    darkMode: false,
    searchBar: false,
    logined: false,
    edit: false,
    update: false,
  });

  return (
    <>
      <ToggleCtx.Provider value={isTogle}>
        <App />
      </ToggleCtx.Provider>
    </>
  );
};

export default ToggleProvider;
