import React from "react";
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="first-footer">
          <p className="footer-text">보드게임하자</p>
          <span>
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </span>
        </div>
        <div className="sec-footer">
          <div>
            <span>(주) 77ㅣ리77ㅣ리</span>
            <span>
              <strong>대표</strong> 우혜리
            </span>
            <span>
              <strong>사업자 번호</strong> 000-0000-0000
            </span>
            <span>보드게임 페이지 제작업</span>
            <span>
              <strong>주소</strong> 대구광역시
            </span>
          </div>
          <div>
            <span>ⓒ 777</span>
          </div>
        </div>
      </footer>
    </>
  );
}
