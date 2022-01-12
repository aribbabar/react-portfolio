import "../css/Skills.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="skills">
      <div className="title-container">
        <h2>Skills</h2>
      </div>
      <div className="skills-container">
        <h2>Hard Skills</h2>
        <Skill skill={"JS"} length={"90%"} />
        <Skill skill={"HTML & CSS"} length={"90%"} />
        <Skill skill={"Java"} length={"80%"} />
        <Skill skill={"C#"} length={"75%"} />
        <Skill skill={"Ruby"} length={"60%"} />
        <Skill skill={"OCaml"} length={"65%"} />
        <Skill skill={"Basic Graphic Design"} length={"65%"} />
        <Skill skill={"C"} length={"50%"} />
      </div>
      <div className="skills-container">
        <h2>Soft Skills</h2>
        <Skill skill={"Positivity"} length={"100%"} />
        <Skill skill={"Adaptability"} length={"80%"} />
        <Skill skill={"Teamwork"} length={"75%"} />
        <Skill skill={"Communication"} length={"70%"} />
      </div>
    </div>
  );
};

export default Skills;
