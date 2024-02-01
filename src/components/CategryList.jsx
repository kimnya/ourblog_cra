import React, { useRef } from "react";
import styled from "styled-components";
import { palette } from "../style/palette";
import { Link } from "react-router-dom";
// import EditCtegory from "./category/EditCtegory";
import { FaGear } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getCategories, getProfile } from "../axios/api";
import EditCtegory from "./EditCtegory";

const CategoryBox = styled.div`
  position: relative;
  height: 92vh;
  border-top: 1px solid ${palette.mainGreen};
  box-sizing: border-box;

  > div {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    margin: 0 15px 15px 0;
    padding-top: 20px;
    font-size: 18px;

    > a,
    p {
      margin: 15px;
      font-size: 24px;
    }
    > span {
      margin: 15px 0px;
    }
    > p {
      display: flex;
      align-items: center;
      > span {
        margin-left: 5px;
        transition: all 0.8s;
      }
      > span:hover {
        transform: scale(1.2);
      }
    }

    ul > li {
      margin: 15px 15px 15px 25px;
    }
  }

  #all {
    margin-left: 15px;
  }
`;

const CategryList = ({ isTogle, editToggleHandler, sideBarToggleHandler }) => {
  const categoryArray = useQuery({
    queryKey: ["getCategory"],
    queryFn: getCategories,
    enabled: localStorage.getItem("accessToken") !== null,
  });
  console.log(categoryArray);

  const getProfileApi = useQuery({
    queryKey: ["getProfile"],
    queryFn: getProfile,
    enabled: localStorage.getItem("accessToken") !== null,
  });

  const setFocus = useRef();
  return (
    <>
      <CategoryBox>
        <div>
          <Link onClick={sideBarToggleHandler} to="/">
            Home
          </Link>
          {!localStorage.getItem("accessToken") ? (
            <p>로그인을 하시면 개인 카테고리가 나옵니다.</p>
          ) : (
            <>
              <p>
                {getProfileApi && getProfileApi.data.data.nickname}의 카테고리
                <span>
                  <FaGear
                    size={"24px"}
                    onClick={() => {
                      editToggleHandler();
                    }}
                  />
                </span>
                {isTogle.edit === true && (
                  <span>
                    <FaCheck
                      color={palette.mainGreen}
                      size={"24px"}
                      onClick={() => {
                        editToggleHandler();
                      }}
                    />
                  </span>
                )}
              </p>

              <Link onClick={sideBarToggleHandler} to={"/articleAll"} id="all">
                전체보기
              </Link>
              {isTogle.edit === true && <EditCtegory setFocus={setFocus} />}
              <ul>
                {categoryArray &&
                  categoryArray.data.data.categories.map((category) => {
                    const { id, categoryName } = category;
                    return (
                      <li key={id} onClick={sideBarToggleHandler}>
                        <Link key={id} to={`/category${categoryName}`}>
                          {categoryName}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </>
          )}
        </div>
      </CategoryBox>
    </>
  );
};

export default CategryList;
