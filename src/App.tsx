import React from "react";
import style from "./scss/style.module.scss";

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
      <div className={style.gray}>
        <h1 className={style.titleH1}>Заголовок 1 белый</h1>
        <h1 className={style.titleGrayH1}>Заголовок 1 серый</h1>
        <h2 className={style.titleH2}>Заголовок 2 белый</h2>
        <h2 className={style.titleGrayH2}>Заголовок 2 серый</h2>
        <h3 className={style.titleH3}>Заголовок 3 белый</h3>
        <h3 className={style.titleGrayH3}>Заголовок 3 серый</h3>
        <p className={style.textLarge}>Текст большой</p>
        <p className={style.textNormal}>Текст основной</p>
        <p className={style.textSmall}>Текст маленький</p>
        <p className={style.textGrayLarge}>Текст серый большой</p>
        <p className={style.textGrayNormal}>Текст серый основной</p>
        <p className={style.textGraySmall}>Текст серый маленький</p>
      </div>
    </>
  );
};

export default App;
