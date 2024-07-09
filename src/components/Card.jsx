import "./card.css";

const Card = ({ image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="cardInfo">
        <h2 className="title">{title}</h2>
        <h6 className="price">{price}</h6>
      </div>
    </div>
  );
};

export default Card;
