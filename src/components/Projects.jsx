import "../css/Projects.css";
import Card from "./Card";
import dbz from "../images/dbz.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="title-container">
        <h2>Projects</h2>
      </div>
      <Card
        img={dbz}
        link={"https://aribbabar.github.io/dbzcardgame/"}
        title={"Dragon Ball Z: The Card Game"}
        desc={
          "A fun simple dragon ball z card game written completely in vanilla JS."
        }
      />
    </div>
  );
};

export default Projects;
