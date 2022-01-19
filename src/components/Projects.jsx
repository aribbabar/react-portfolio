import "../css/Projects.css";
import Card from "./Card";
import dbz from "../images/dbz.jpg";
import umd from "../images/umd.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="title-container">
        <h2>Projects</h2>
      </div>
      <div className="cards-container">
        <Card
          img={umd}
          title={"UMD Projects"}
          desc={
            "I have written a lot of school projects in a number of languages such as Java, C, Ruby, OCaml, & Rust. The projects are in my local drive and also in private repositories, and they are available for viewing for any potential employers."
          }
        />
        <Card
          img={dbz}
          link={"https://aribbabar.github.io/dbzcardgame/"}
          title={"Dragon Ball Z: The Card Game"}
          desc={
            "A fun simple dragon ball z card game written completely in vanilla JS."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
