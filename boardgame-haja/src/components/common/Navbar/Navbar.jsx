import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <span className="under-line"></span>
      <nav className="cinema-nav">
        <ul>
          <li>
            <button type="button" className="active">
              랭킹순
            </button>
          </li>
          <li>
            <button type="button">카테고리별</button>
          </li>
          <li>
            <button type="button">필터 +</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
