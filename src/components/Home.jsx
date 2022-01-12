import { useState, useEffect, useRef } from "react";
import x from "../images/x.svg";
import navBtn from "../images/nav-btn.svg";
import "../css/Home.css";

const Home = () => {
  const mobileNavbar = useRef(null);
  const firstUpdate = useRef(true);
  const [mobileNavClass, setMobileNavClass] = useState(false);

  const toggleNavClass = () => {
    setMobileNavClass((prevState) => {
      prevState === true ? setMobileNavClass(false) : setMobileNavClass(true);
    });
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (mobileNavClass === true) {
      mobileNavbar.current.style.animationName = "slidein";
    } else if (mobileNavClass === false) {
      mobileNavbar.current.style.animationName = "slideout";
    }
  }, [mobileNavClass]);

  return (
    <div>
      <div className="mobile-navbar" ref={mobileNavbar}>
        <img className="x" src={x} alt="x" onClick={toggleNavClass} />
        <a href="#home" onClick={toggleNavClass}>
          Home
        </a>
        <a href="#about" onClick={toggleNavClass}>
          About
        </a>
        <a href="#projects" onClick={toggleNavClass}>
          Projects
        </a>
        <a href="#skills" onClick={toggleNavClass}>
          Skills
        </a>
        <a href="#work-experience" onClick={toggleNavClass}>
          Work Experience
        </a>
      </div>
      <header id="home">
        <img
          className="navbar-btn"
          src={navBtn}
          alt="navbar-btn"
          onClick={toggleNavClass}
        />
        <div className="navbar" onClick={toggleNavClass}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="first-half">
          <h1>Arib</h1>
        </div>
        <div className="second-half">
          <h1>Farooqui</h1>
        </div>
      </header>
    </div>
  );
};

export default Home;
