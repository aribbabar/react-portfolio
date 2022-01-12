import { useEffect, useRef } from "react";
import "../css/Skill.css";

const Skill = ({ skill, length }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        skillRef.current.getBoundingClientRect().top - window.innerHeight <=
        0
      ) {
        skillRef.current.style.width = length;
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [skillRef]);

  return (
    <div className="skill">
      <p>{skill}</p>
      <div className="skill-bar-overlay">
        <div className="skill-bar" ref={skillRef}></div>
      </div>
    </div>
  );
};

export default Skill;
