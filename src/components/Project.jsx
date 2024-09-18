import React from "react";

const Project = ({
  index = "00",
  image = "",
  alt = "balvesh project",
  title = "Project-1",
  desc = "lorem.....",
  features = ["feature 1", "feature 2"],
  link="/",
  createdAt="00/00/0000"
}) => {
  return (
    <>
      <div className="row pt-3 pb-3 border-bottom">
        <div className="col-md-6">
          <div className="project-img">
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
            <h2>{index}</h2>

            <div className="box-4"></div>
            <div className="box-5"></div>
            <div className="box-6"></div>
            <h5>{createdAt}</h5>
            <img src={image} alt={alt} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-details pt-3 pb-3">
            <h1 className="text-uppercase display-5">
              <a href={link} target="_blank">{title}</a>
            </h1>
            <p className="text-secondary fs-4">{desc}</p>
            <div className="d-flex gap-2 flex-wrap">
              {features.map((t, i) => (
                <span>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
