import React from "react";
import style from "./scss/style.module.scss";
import MainLayout from "./pages/MainLayout";

const App: React.FC = function () {
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
      <MainLayout/>
    </>
  );
};

export default App;
