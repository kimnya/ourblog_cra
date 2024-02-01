import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import SearchPage from "../page/SearchPage";
import Layout from "./Layout";
// import MainPage from "../page/MainPage";
import EditPage from "../page/EditPage";
// import Articleread from "../page/ArticleRead";
// import MyInfoPage from "../page/myInfoPage";
// import AllArticlePage from "../page/AllArticlePage";
// import PrivateRoute from "../utill/PrivateRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Suspense fallback="..loading">
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route index element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/readPage/:postId" element={<Articleread />} /> */}
            {/* <Route
              path="/category/:categoryName"
              element={<AllArticlePage />}
            /> */}
            {/* <Route path="/articleAll" element={<AllArticlePage />} /> */}
            {/* <Route element={<PrivateRoute />}> */}
            {/* <Route path="/myPage" element={<MyInfoPage />} /> */}
            <Route path="/write" element={<EditPage />} />
            {/* </Route> */}
          </Route>
        </Suspense>
      </Routes>
    </>
  );
};

export default Router;
