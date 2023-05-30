import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ id, data, modalOpen }) {
  console.log(id);
  console.log(data);
  return (
    <>
      <article className='cinema-card'>
        <div className='cinema-contents'>
          <img src={data.image} alt='' />
          <h3 className='cinema-title ellipsis'>{data.name}</h3>
          <ul className='cinema-info'>
            <li>
              <span>인원</span>
              <span>
                {data.min_player}명~{data.max_player}명
              </span>
            </li>
            <li>
              <span>평점</span>
              <span className='star'>{data.rate}</span>
            </li>
            <li>
              <span>장르</span>
              <span>{data.theme}</span>
            </li>
            <li>
              <span>플레이 타임</span>
              <span>{data.play_time}</span>
            </li>
          </ul>
        </div>
        <div className='button-group'>
          <button type='button' className='heart' onClick={modalOpen}>
            찜하기
          </button>
          <Link to={`/detail/${id}`}>상세설명</Link>
        </div>
      </article>
    </>
  );
}
