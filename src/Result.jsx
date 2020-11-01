import "./App.css";
import React, { Fragment, Component } from "react";

// const config = {
//   method: "get",
//   url: "https://opentdb.com/api.php?amount=50&category=21&type=multiple",
//   headers: {
//     Cookie: "PHPSESSID=6d663f0500d2bce437c3d0244115b160",
//   },
// };

const Result = ({ classes, props }) => {
  return (
    <Fragment>
      <div class='card question-card'>
        <div class='card-body'>
          <h4 class='card-title'>The Answer was </h4>
          <p class='card-text'>You have </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Result;
