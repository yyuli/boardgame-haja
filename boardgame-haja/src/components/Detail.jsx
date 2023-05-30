import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import heart from "../images/icon-heart.png";
import poster from "../images/poster-img1.jpg";
import Header from "./Header";

export default function Detail({ id, data }) {
  console.log(id);
  console.log(data);
  return (
    <>
      <Header />
      <span className="under-line"></span>
      <div className="detail-nav">
        <div className="list-back">
          <Link to={"/"}>&#60; 목록으로 돌아가기</Link>
        </div>
        <p>상세정보</p>
      </div>
      <main className="detail-main">
        <h2 className="a11y-hidden">상세정보</h2>
        <div className="detail-left">
          <img src={poster} alt="" className="detail-img" />
          <button type="button" className="heart-btn">
            <img src={heart} alt="" />
            찜하기
          </button>
        </div>
        <div className="detail-right">
          <div className="detail-name">
            <div className="rank">#141</div>
            <h3>달무티</h3>
          </div>
          <div className="detail-des">
            <div>
              <p className="title">인원</p>
              <p className="des">1-4명</p>
            </div>
            <div>
              <p className="title">플레이 타임</p>
              <p className="des">15분</p>
            </div>
            <div>
              <p className="title">사용 연령</p>
              <p className="des">12세 이상</p>
            </div>
            <div>
              <p className="title">테마</p>
              <p className="des">공상 과학</p>
            </div>
            <div>
              <p className="title">난이도</p>
              <p className="des">3.15/5</p>
            </div>
            <div>
              <p className="title">평점</p>
              <p className="des">8.9/10</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
