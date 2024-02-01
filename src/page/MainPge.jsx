import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArticleList from "../components/ArticleList";

const MainPage = () => {
  const navigate = useNavigate();

  const moveWritePge = (evt) => {
    evt.preventDefault();
    if (localStorage.getItem("accessToken")) {
      navigate("/write");
    } else {
      alert("로그인 해주세요");
      navigate("/login");
    }
  };

  return (
    <>
      <ArticleList />
      <Link to="/write">글 작성하기</Link>
    </>
  );
};

export default MainPage;
