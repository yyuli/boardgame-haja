import React from "react";
import { Link } from "react-router-dom";
import "./LoginSign.css";

export default function LoginSign() {
  return (
    <>
      <div className="login-container">
        <Link to={'/login'} className="login">
          로그인
        </Link>
        <Link to={'/join'} className="join">
          회원가입
        </Link>
      </div>
    </>
  );
}
