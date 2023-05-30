import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <header>
        <h1 class="logo big">BOARDGAME HAJA</h1>
        <span className="under-line"></span>
        <nav className="cinema-nav">
          <ul>
            <li>
              <button type="button" className="li-item active">
                로그인
              </button>
            </li>
            <li>
              <Link to={"/join"} className="li-item link">회원가입</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="login-main">
        <h2 className="a11y-hidden">로그인</h2>
        <form>
          <label for="email" className="labl-email">
            이메일
          </label>
          <input id="email" type="email" className="inp-email" />
          <label for="pw" className="labl-pw">
            비밀번호
          </label>
          <input id="pw" type="password" className="inp-pw" />
          <button type="submit" className="btn-login">
            로그인
          </button>
        </form>
      </main>
    </>
  );
}
