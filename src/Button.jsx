import "./App.css";
import React, { Fragment, Component } from "react";
// const config = {
//   method: "get",
//   url: "https://opentdb.com/api.php?amount=50&category=21&type=multiple",
//   headers: {
//     Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
//   },
// };

const Button = ({ classes, children }) => {
  return (
    <Fragment>
      <button
        className={`${
          classes.myButton
        } ${`b-style btn btn-default btn-lg btn-block`}`}
      ></button>
    </Fragment>
  );
};
export default Button;
