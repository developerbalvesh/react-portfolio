import React from "react";
import Layout from "../components/Layout";
import NextBtn from "../components/NextBtn";

const WhatNext = () => {
  return (
    <Layout title="Balvesh | What's next">
      <div className="container pt-3 pb-3">
        <h1 className="fs-2 text-secondary">What's Next??</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex h-100 flex-column justify-content-center align-items-start ">
            <h2 className="display-4 p-0 m-0">Learning Next Js</h2>
            <p className="fs-3 pt-3">
              I Believe that my learning nature will lead me to the great
              position where i deserve.
            </p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="w-100" src="/portfolio-img/2b6ca21c3ddf03a197336fbbaee271d4.png" alt="" />
          </div>
        </div>
      </div>
      <NextBtn next="Home"  headTo="/"  />
    </Layout>
  );
};

export default WhatNext;
