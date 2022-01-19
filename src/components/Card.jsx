import "../css/Card.css";

const Card = ({ img, link, title, desc }) => {
  return (
    <div
      className="card"
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
    >
      <img src={img} alt="" />
      <div className="card-content-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
