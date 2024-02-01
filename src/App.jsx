import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Title from "./components/Title";
import Header from "./components/Header";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Input />
      <Button>저장</Button>
      <Title />
      <Login />
    </div>
  );
};

export default App;
