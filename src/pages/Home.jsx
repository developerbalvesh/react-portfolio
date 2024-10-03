import React from "react";
import Layout from "../components/Layout";
import NextBtn from "../components/NextBtn";
import About from './About'

const Home = () => {
  return (
    <Layout title="Balvesh | Portfolio Website">
      <div className="container">
        <div className="grid-container">
          <div className="box box-1">
            <h1>Welcome</h1>
            <div className="line"></div>
            <h3>To my portfolio</h3>
            <img src="/portfolio-img/6567c0294361073d63c3ccde59f7ec20.png" alt="" />
          </div>
          <div className="box box-2">
          <h2>Balvesh Puramkar</h2>
          <h3>A Web Dev.</h3>
          </div>
          <div className="box box-3">
            <img src="/portfolio-img/home-port.png" alt="" />
            <h2>Balvesh Puramkar</h2>
            <h3>A Web Dev.</h3>
          </div>
        </div>
      </div>
      <NextBtn next="About " headTo="/about"/>
    </Layout>
  );
};

export default Home;
