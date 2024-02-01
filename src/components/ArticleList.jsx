import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArticleListBox from "./ArticleListBox";
import { useQuery } from "@tanstack/react-query";
import { articleListRead } from "../axios/api";

const ArticleListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 1237px;
  height: 710px;
`;

const ArticleList = () => {
  const articleAll = useQuery({
    queryKey: ["articleRead"],
    queryFn: articleListRead,
  });

  const { data } = articleAll;
  return (
    <>
      {/* 리스트갯수에 따라 margin값 조절 */}
      <ArticleListStyle>
        {data &&
          data.data.map((article) => {
            // articleList는 객체 그 안에 데이터 객체가 있고 그안에 데이터 배열이 있다. 내가 원하는 건 배열
            return <ArticleListBox key={article.id} article={article} />;
          })}
      </ArticleListStyle>
    </>
  );
};
export default ArticleList;
