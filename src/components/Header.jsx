import React, { useEffect, useState } from "react";

const Header = () => {
  const [bar, setBar] = useState(false);
  useEffect(() => {
    let bar = document.getElementById("bar");
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      let height = window.scrollMaxY;
      let wHeight = window.innerHeight;
      let wWidth = window.innerWidth;

      // if(value>150){
      //   bar.style.position = "sticky";
      //   header.style.position = "sticky";
      // }else{
      //   bar.style.position = "unset"
      //   header.style.position = "unset"
      // }

      if (wWidth > wHeight) {
        if (!height) {
          height = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
          height -= 650;
        }
        bar.style.width = (value / height) * 100 + "%";
      }
    });
  }, []);

  return (
    <>
      <header id="header" className="sticky-top">
        <div className="container-fluid">
          <div className="d-flex justify-content-around align-items-center">
            <div className="logo align-self-center">
              <h1>
                <span>Devops</span>Balvesh
              </h1>
            </div>
            <div className="menu">
              <div className="bar" onClick={() => setBar(!bar)}>
                <div className={bar ? "bar-1 deg-45" : "bar-1"}></div>
                <div className={bar ? "bar-2 d-none" : "bar-2"}></div>
                <div className={bar ? "bar-3 deg--45" : "bar-3"}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="loading" id="bar"></div>
      <div
        className={
          bar
            ? "menu-body d-flex justify-content-center align-items-center round-in animate__animated animate__bounceInRight"
            : "menu-body d-flex justify-content-center align-items-center round-in d-none"
        }
      >
        <nav className="">
          <ul className="menu-items p-5 d-flex text-center flex-column gap-4">
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/next">What's Next?</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
