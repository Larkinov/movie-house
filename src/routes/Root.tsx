import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "../scss/Root.module.scss";
<<<<<<< HEAD
import Header from "../components/Header/Header";

const Root: React.FC = function () {
  // fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
  //   method: "GET",
  //   headers: {
  //     "X-API-KEY": "6219ce44-66a2-458a-9cf4-bcc570cecc00",
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json))
  //   .catch((err) => console.log(err));
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <Header />
          <Outlet />
          <footer>footer</footer>
        </div>
=======

const Root: React.FC = function () {
  fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
    method: "GET",
    headers: {
      "X-API-KEY": "6219ce44-66a2-458a-9cf4-bcc570cecc00",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  return (
    <>
      <div className={style.container}>
        <header>Header</header>
        <ul>
          <li>
            <Link to={"/serials"}>serials</Link>
          </li>
          <li>
            <Link to={"/films"}>films</Link>
          </li>
          <li>
            <Link to={"/cartoons"}>cartoons</Link>
          </li>
        </ul>
        <Outlet />
        <footer>footer</footer>
>>>>>>> b94b4ac93a638a9cea30bdf97c00d1d4d675210d
      </div>
    </>
  );
};

export default Root;
