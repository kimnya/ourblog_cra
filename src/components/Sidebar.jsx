import React from "react";
import styled from "styled-components";
import CategryList from "./CategryList";
import { HiXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const SideBarStyle = styled.div`
  left: 20px;
`;

const SideBarBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  position: absolute;
  left: ${(props) => {
    if (props.$isTogle.sideBar) {
      return "-20px";
    } else {
      return "-999px";
    }
  }};
  top: -38px;
  width: 15vw;
  height: 100vh;
  background-color: #fff;
  transition: all 0.5s;
  > svg {
    margin: 0 0 15px 25px;
  }
`;

const SideBar = ({
  sideBarToggleHandler,
  isTogle,
  reactIconsSize,
  editToggleHandler,
}) => {
  return (
    <>
      <SideBarStyle $isTogle={isTogle}>
        <RxHamburgerMenu size={reactIconsSize} onClick={sideBarToggleHandler} />
        <SideBarBox $isTogle={isTogle}>
          <HiXMark size={reactIconsSize} onClick={sideBarToggleHandler} />
          <CategryList
            sideBarToggleHandler={sideBarToggleHandler}
            isTogle={isTogle}
            editToggleHandler={editToggleHandler}
          />
        </SideBarBox>
      </SideBarStyle>
    </>
  );
};

export default SideBar;
