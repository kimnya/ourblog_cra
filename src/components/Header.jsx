import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import Title from "./Title";
import { FaMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../axios/api";
import SideBar from "./Sidebar";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  min-height: 80px;

  > div {
  }
  > .mainpageIcons {
    display: flex;
    right: 20px;
    > * {
      margin-left: 20px;
    }
  }
`;

const Header = () => {
  const [isTogle, setTogle] = useState({
    sideBar: false,
    darkMode: false,
    searchBar: false,
    logined: false,
    edit: false,
    update: false,
  });

  const getProfileApi = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
    enabled: localStorage.getItem("accessToken") !== null,
  });

  useEffect(() => {
    setTogle((prev) => ({ ...prev, logined: !prev.logined }));
  }, []);

  const navigate = useNavigate();
  const reactIconsSize = "22px";

  const sideBarToggleHandler = () => {
    setTogle((prev) => ({ ...prev, sideBar: !prev.sideBar }));
  };

  const darkModeToggleHandler = () => {
    setTogle((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };
  const serchBarToggleHandler = () => {
    setTogle((prev) => ({ ...prev, searchBar: !prev.searchBar }));
    navigate("/search");
  };

  const editToggleHandler = () => {
    setTogle((prev) => ({ ...prev, edit: !prev.edit }));
  };

  const moveLogin = () => navigate("/login");

  const logoutSubmit = (evt) => {
    evt.preventDefault();
    setTogle((prev) => ({ ...prev, logined: !prev.logined }));
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      {/* 로그아웃 & 닉네임 띄우는 부분 더 이쁘게 */}

      <HeaderStyled>
        <SideBar
          isTogle={isTogle}
          sideBarToggleHandler={sideBarToggleHandler}
          reactIconsSize={reactIconsSize}
          editToggleHandler={editToggleHandler}
        />
        <Title />
        <div className="mainpageIcons">
          {isTogle.darkMode ? (
            <IoSunny size={reactIconsSize} onClick={darkModeToggleHandler} />
          ) : (
            <FaMoon size={reactIconsSize} onClick={darkModeToggleHandler} />
          )}
          <IoSearch size={reactIconsSize} onClick={serchBarToggleHandler} />
          {localStorage.getItem("accessToken") == null ? (
            <Button
              width="50px"
              height="25px"
              $fontColor="mainGray"
              onClick={moveLogin}
            >
              로그인
            </Button>
          ) : (
            <p>
              {getProfileApi && getProfileApi.data.data.nickname}/
              <Link onClick={logoutSubmit}>로그아웃</Link>
            </p>
          )}
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
