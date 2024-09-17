import React, { useEffect } from "react";
import Layout from "../components/Layout";

const About = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  return (
    <Layout>
      <div className="container pt-3 pb-5 about border-bottom border-secondary">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex flex-column justify-content-evenly h-100 ">
              <h3 className="p-0 m-0 text-white-50 text-uppercase fs-4">Who am i</h3>
              <img
                className="rounded-circle"
                src="/portfolio-img/664c6309558cc5ddb6b4f6a9744894aa.png"
                alt=""
              />
              <h2 className="p-0 m-0 text-uppercase fs-3">Web development is my passion.</h2>
              <h2 className="p-0 m-0 text-uppercase fs-3">
                I see potential in every idea, and I code what I envision.
              </h2>
              <p className="p-0 m-0 fs-6">
                
                My name is <strong>Balvesh B. Puramkar</strong>, I am a MERN stack developer with 6 months of experience. I build
                fullstack web applications using MongoDB, Express, React, and
                Node.js. I focus on clean code and smooth user experiences.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/portfolio-img/c258e5843d3a4419276fbd36e7736733.png"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container pt-5 p-b5 background">
        <div className="row">
            <div className="col-md-5">
                <img className="w-100 object-fit-cover" src="/portfolio-img/7462bc0b07159bc9589cbe4ae102889c.png" alt="" />
            </div>
            <div className="col-md-7">
                <div className="d-flex flex-column justify-content-evenly h-100 gap-4">
                    <div className="d-flex flex-column justify-content-evenly gap-3">
                        <h1 className="text-secondary text-uppercase">My Background</h1>
                        <div>
                            <h4>Education</h4>
                            <ul>
                                <li><i class="fa-solid fa-award"></i> Bachelor of Engineering from NIT Collage of Engineering in CSE</li>
                                <li><i class="fa-solid fa-award"></i> Diploma in Computer Science</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Work Experience</h4>
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i> Web Developer Intern for 6 months in PSK Technologies, Pvt.Ltd.</li>
                                <li><i class="fa-solid fa-briefcase"></i> System Analyst for 3 Years in JD Collage of Engineering & Management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-evenly">
                        <h1 className="text-secondary">Exhibits / achievements</h1>
                        <div>
                            <h4>Group Shows</h4>
                            <ul>
                                <li><i class="fa-solid fa-trophy"></i> Won a Project Competition During B.E. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
