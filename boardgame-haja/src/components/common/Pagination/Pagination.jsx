import React from "react";
import "./Pagination.css";

export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const startPage = Math.floor((page - 1) / 5) * 5 + 1;
  const endPage = Math.min(startPage + 4, numPages);
  console.log(startPage)
  console.log(endPage)

  return (
    <>
      <nav className="nav-pagination">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#!"
              onClick={() => setPage(Math.max(page - 1, 1))}
            >
              &#60;
            </a>
          </li>
          {Array(endPage - startPage + 1)
            .fill()
            .map((_, i) => (
              <li className="page-item" key={startPage + i}>
                <a
                  className={`page-link ${page === startPage + i? "selected" : ""}`}
                  href="#!"
                  onClick={() => setPage(startPage + i)}
                >
                  {startPage + i}
                </a>
              </li>
            ))}
          <li className="page-item">
            <a
              className="page-link"
              href="#!"
              onClick={() => setPage(Math.min(page + 1, numPages))}
            >
              &#62;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
