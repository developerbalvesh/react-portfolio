import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({
  children,
  title = "Balvesh | Portfolio",
  description = "Balvesh Puramkar is a MERN Stack Developer, he is good at developing and maintaining web projects.",
  keywords = [
    "MERN Stack Developer",
    "Balvesh Puramkar",
    "Freelancer",
    "Balvesh",
    "Puramkar", 
    "Balwesh",
    "Balwesh puramkar"
  ],
  author = "Balvesh Puramkar",
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <div className="animate__animated animate__jackInTheBox layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
