import React from "react";
import styled from "styled-components";

const MainStlyed = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 800px;
  justify-content: center;
  align-items: center;
`;

const Main = ({ children }) => {
  return (
    <>
      <MainStlyed>{children}</MainStlyed>
    </>
  );
};

export default Main;
