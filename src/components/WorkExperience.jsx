import "../css/WorkExperience.css";

const WorkExperience = () => {
  return (
    <div id="work-experience">
      <div className="title-container">
        <h2>Work Experience</h2>
      </div>
      <div className="experience-container">
        <h2>Technical Director</h2>
        <h3>Distance Education Tech & Services (DETS)</h3>
        <h5>Aug 2021 - Present</h5>
        <ul>
          <li>Provided technical support to instructors</li>
          <li>Recorded classroom with basic staging techniques</li>
        </ul>
        <div className="line-break"></div>
        <h2>Key Holder (Assistant Manager)</h2>
        <h3>Shoe Show Mega</h3>
        <h5>Jan 2019 - Present</h5>
        <ul>
          <li>Demonstrated exceeding customer service skills</li>
          <li>
            Handled fast-paced microtransactions and preformed daily management
            duties
          </li>
        </ul>
        <div className="line-break"></div>
        <h2>Web Intern</h2>
        <h3>Woodlawn Villager</h3>
        <h5>Aug 2017 - Aug 2018</h5>
        <ul>
          <li>
            Designed & upddated a WordPress website as directed by supervisor
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
