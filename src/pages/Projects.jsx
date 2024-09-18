import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import NextBtn from '../components/NextBtn'

const Projects = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <Layout title="Balvesh | Projects">
      <div className="container projects pt-3 pb-3">
        <h1 className="text-uppercase text-secondary fs-2 mt-3 mb-3 pb-3">
          My Featured works
        </h1>

        <Project
          index={"01"}
          image="/portfolio-img/eef5e6a97f9bbc6a9a5d4d0f7bd26a5d.png"
          alt="ecommerce eshopee project by balvesh"
          title="EShopee | Ecommerce project"
          desc="A project that used for e shopping in digital world"
          features={[
            "Node Js",
            "React Js",
            "Express Js",
            "MongoDB",
            "Payment Gateway",
            "Authentication",
            "Cart",
            "Full Stack",
          ]}
          createdAt="01/09/2024"
          link="https://eshopee.onrender.com/"
        />
        <NextBtn next="Skills" headTo="/skills"  />

      </div>
    </Layout>
  );
};

export default Projects;
