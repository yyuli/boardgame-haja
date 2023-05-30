import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Join() {
  return (
    <>
      <header>
        <h1 class="logo big">BOARDGAME HAJA</h1>
        <span className="under-line"></span>
        <nav className="cinema-nav">
          <ul>
            <li>
              <Link to={'/login'} className="li-item link">로그인</Link>
            </li>
            <li>
              <button type="button" className="li-item active">
                회원가입
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="login-main">
        <h2 className="a11y-hidden">회원가입</h2>
        <form>
          <label for="nickname" className="labl-email">
            닉네임
          </label>
          <input id="nickname" type="email" className="inp-email" />
          <label for="email" className="labl-email">
            이메일
          </label>
          <input id="email" type="email" className="inp-email" />
          <label for="pw" className="labl-pw">
            비밀번호
          </label>
          <input id="pw" type="password" className="inp-email" />
          <label for="pw" className="labl-pw">
            비밀번호 확인
          </label>
          <input id="pw" type="password" className="inp-pw" />
          <button type="submit" className="btn-login">
            회원가입
          </button>
        </form>
      </main>
    </>
  );
}
