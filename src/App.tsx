import React from "react";
import { kp } from "./test";

const App:React.FC = function() {

  const   getData = async() => {
    const {data} = await kp.movie.getById(666);
    console.log(data);
  }

  getData();

  return (
    <>
      <div>ss</div>
    </>
  );
}

export default App;
