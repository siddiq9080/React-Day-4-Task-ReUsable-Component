import propTypes from "prop-types";

const ThreeCard = ({ image, title, description }) => {
  return (
    <div className="card text-center border-0">
      <div className="card-img-top rounded-circle">
        <img
          src={image}
          alt={title}
          style={{
            height: 220,
            width: 200,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="card-body">
        <h3 className="card-text">{title}</h3>
        <p className="card-text mt-3">{description}</p>
      </div>
    </div>
  );
};
ThreeCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

export default ThreeCard;
