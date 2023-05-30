import React from "react";
import magnifier from "../../../images/magnifier.png"
import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="보드게임을 검색해보세요."
          className="search-input"
        />
        <img src={magnifier} alt="돋보기" className="search-icon" />
      </div>
    </>
  );
}
