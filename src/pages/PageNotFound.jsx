import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="page-not-found d-flex flex-column justify-content-center align-items-center gap-3">
            <div>
              <img src="/notfound.webp" width="200px" alt="" />
            </div>
            <div>
              <h1>Page Not Found !</h1>
            </div>
            <div>
              <Link to='/'>
                <button className="">Go Home</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
