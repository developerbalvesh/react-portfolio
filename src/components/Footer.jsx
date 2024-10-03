import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="contact" className="container pt-5 pb-5">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <h1>GET IN TOUCH</h1>
                <div className="mb-3 line"></div>
              </div>
            </div>
            <div className="col-md-4">
              <h6>Social Media</h6>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/balvesh/"
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/developerbalvesh/"
                  >
                    <i className="fa-brands fa-github"></i> Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/balveshpuram/"
                  >
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/balwesh.puram/"
                  >
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Address</h6>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/pinbZkJsUbMG7pLH7"
                  >
                    Nagpur - 440023, Maharashtra, India
                  </a>
                </li>
              </ul>
              <h6>Phone</h6>
              <ul>
                <li>
                  <a target="_blank" href="tel: +918208940419">
                    +91 82089 40419
                  </a>
                </li>
              </ul>
              <h6>Email</h6>
              <ul>
                <li>
                  <a target="_blank" href="mailto: developer.balvesh@gmail.com">
                    developer.balvesh@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <p className="text-center">
            This website is developed & maintained by{" "}
            <strong><Link to={'https://www.devopsbalvesh.in'}>Balvesh Puramkar</Link></strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
