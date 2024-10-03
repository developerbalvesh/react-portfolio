import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Skill from "../components/Skill";
import NextBtn from "../components/NextBtn";

const Skills = () => {

  return (
    <Layout title="Balvesh | Skills">
      <div className="skills container pt-3 pb-3">
        <h1 className="text-secondary text-uppercase fs-2">
          Skills & Technologies
        </h1>
        <Skill
          topic="Frontend"
          heading="Crafting user interfaces with code"
          skills={[
            { name: "React JS", img: "/skills/react-js.png" },
            { name: "Bootstrap", img: "/skills/bootstrap.png" },
            { name: "JQuery", img: "/skills/jquery.png" },
            { name: "Html", img: "/skills/html.png" },
            { name: "CSS", img: "/skills/css.png" },
            { name: "JavaScript", img: "/skills/js.png" },
            { name: "Parallax", img: "/skills/parallax.png" },
            { name: "Animate.CSS", img: "/skills/animatecss.png" },
          ]}
        />

        <Skill
          topic="Backend"
          heading="Powering functionality behind the scenes."
          skills={[
            { name: "Express Js", img: "/skills/expressjs.png" },
            { name: "Node Js", img: "/skills/nodejs.png" },
            { name: "MongoDB", img: "/skills/mongodb.png" },
            { name: "JWT Auth", img: "/skills/jwt.png" },
            { name: "Redux", img: "/skills/redux.png" },
            { name: "Context API", img: "/skills/contextapi.png" },
          ]}
        />

        <Skill
          topic="Tools"
          heading="Enhancing productivity and precision."
          skills={[
            { name: "Git/Github", img: "/skills/git.png" },
            { name: "VS Code", img: "/skills/vscode.png" },
          ]}
        />
      </div>
      <NextBtn next="Next" headTo="/next" />
    </Layout>
  );
};

export default Skills;
