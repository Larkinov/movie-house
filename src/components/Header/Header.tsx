import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
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
      <div style={{textAlign:"right",display:"block", color:"white"}}>ssч</div>
    </>
  );
};

export default Header;
