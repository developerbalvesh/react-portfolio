import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container pt-5 pb-5">
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
                  <a href=""><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </li>
                <li>
                  <a href=""><i className="fa-brands fa-github"></i> Github</a>
                </li>
                <li>
                  <a href=""><i className="fa-brands fa-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a href=""><i className="fa-brands fa-facebook"></i> Facebook</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Address</h6>
              <ul>
                <li>
                  <a href="">Nagpur - 440023, Maharashtra, India</a>
                </li>
              </ul>
              <h6>Phone</h6>
              <ul>
                <li>
                  <a href="">+91 82089 40419</a>
                </li>
              </ul>
              <h6>Email</h6>
              <ul>
                <li>
                  <a href="">developer.balvesh@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
        <p>This website is developed & maintained by Balvesh Puramkar</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
