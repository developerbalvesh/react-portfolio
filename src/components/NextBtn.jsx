import React from "react";
import { Link } from "react-router-dom";

const NextBtn = ({ next = "Next", headTo = "/" }) => {
  return (
    <Link to={headTo}>
      <div className="next-btn d-flex flex-column justify-content-center align-items-center">
        <h2>Head to <span>{next}</span> page</h2>
        <h3><i className="fa-solid fa-circle-chevron-right"></i></h3>
      </div>
    </Link>
  );
};

export default NextBtn;
