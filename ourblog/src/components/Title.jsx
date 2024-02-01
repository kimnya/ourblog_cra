import React from "react";
import styled from "styled-components";
import { palette } from "../styles/palette";
import { Link } from "react-router-dom";

const TitleLogo = styled.h1`
  color: ${palette.mainGreen};
  font-weight: bold;
  font-size: 52px;
`;

const Title = () => {
  return (
    <Link to={"/"}>
      <TitleLogo>ourblog</TitleLogo>
    </Link>
  );
};

export default Title;
