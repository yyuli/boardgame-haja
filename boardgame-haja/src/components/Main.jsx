import React, { useState } from "react";
import "./Main.css";
import Card from './common/Card/Card'
import Navbar from './common/Navbar/Navbar'
import Pagination from "./common/Pagination/Pagination";
import Header from "./Header";

export default function Main(props) {
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="basic-main">
        <h2 className="a11y-hidden">랭킹순</h2>
        {props.data.slice(offset, offset + limit).map((data,index) => (
          <Card key={index} id={index} data={data} modalOpen={props.modalOpen}/>
        ))}
      </main>
      <Pagination total={props.data.length} limit={limit} page={page} setPage={setPage}/>
    </>
  );
}
