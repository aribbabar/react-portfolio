import "../css/Projects.css";
import Card from "./Card";
import dbz from "../images/dbz.jpg";
import umd from "../images/umd.png";
import ticTacToe from "../images/tic-tac-toe.jpg";

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
          technologies={["Java", "C", "Ruby", "OCaml", "Rust"]}
        />
        <Card
          img={dbz}
          link={"https://aribbabar.github.io/dbzcardgame/"}
          title={"Dragon Ball Z: The Card Game"}
          desc={
            "A fun simple dragon ball z card game written completely in vanilla JS."
          }
          technologies={["HTML", "CSS", "JS"]}
        />
        <Card
          img={ticTacToe}
          link={
            "https://advanced-tic-d328t0pz3-aribbabar100-gmailcom.vercel.app/"
          }
          title={"Advanced Tic Tac Toe"}
          desc={
            "Alpha version of a not so advanced version of tic tac toe. Made with Svelte!"
          }
          technologies={["HTML", "CSS", "JS", "Svelte"]}
        />
      </div>
    </div>
  );
};

export default Projects;
