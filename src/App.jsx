import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Title from "./components/Title";
import Header from "./components/Header";
import Login from "./components/Login";
import EditPage from "./page/EditPage";
import Router from "./components/Router";
import { GlobalStyle } from "./style/GobalStyle";
// import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
