import React from "react";
import licat from "../images/licat.png";
import "./Modal.css";

export default function Modal(props) {
  return (
    <article id="modal">
      <div className="modal-wrap">
        <h2>찜하기 완료!!♥♥♥</h2>
        <h3>즐거운 시간 되세요!</h3>
        <img src={licat} alt="응원하는 라이캣" />
        <button type="button" className="btn-close" onClick={props.modalClose}>
          종료하기
        </button>
      </div>
    </article>
  );
}
