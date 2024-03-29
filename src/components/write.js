import { useEffect } from "react";
import { useNavigate, defer, useRouteLoaderData } from "react-router-dom";
import { privateApi } from "../util/http.js";

import classes from "./write.module.css";
import WritingArea from "./WritingArea.js";

const Write = () => {
  const navitate = useNavigate();
  const { isLogin } = useRouteLoaderData("write");

  useEffect(() => {
    if (!isLogin) {
      navitate("/login");
    }
  }, [isLogin, navitate]);
  return (
    <div className={classes.container}>
      <div className={classes.writeContainer}>
        <h1 className={classes.title}>글쓰기</h1>
        <WritingArea method="POST" />
      </div>
    </div>
  );
};

export default Write;

export const getIsLogin = async () => {
  try {
    const response = await privateApi.get("accounts/mypage/");
    if (response.ok) {
      return { isLogin: true, userData: response.data };
    }
    return { isLogin: false };
  } catch (error) {
    return { isLogin: false };
  }
};

export const loader = () => {
  const isLoggedIn = localStorage.getItem("user");
  if (!isLoggedIn) {
    return { isLogin: false };
  } else {
    return defer({
      isLogin: getIsLogin(),
    });
  }
};
