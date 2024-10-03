import React from "react";

const Skill = ({
  topic = "Frontend",
  heading = "Crafting user interfaces with code",
  skills = [{ name: "React Js", img: "/skills/react-js.png" }],
}) => {
  return (
    <>
      <div className="grid mt-3 mb-4">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <h4>{topic}</h4>
        <div className="heading">
          <h5>{heading}</h5>
        </div>
        <div className="list">
          <div className="row text-center p-3">
            {skills.map((s, i) =>(
              
              <>
                <div key={i} className="col-md-3">
                  <div className="p-1 mt-3 bg-secondary rounded-3 d-flex align-items-center text-center justify-content-around">
                    <h6 className="fs-4 p-1 m-0">{s.name}</h6>
                    <div className="line m-1"></div>
                    <img className="rounded-3 m-1" src={s.img} alt="" />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
