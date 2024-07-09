import "./EmbraceCard.css";

const EmbraceCard = ({ title, content }) => {
  return (
    <div className="embraceCard">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default EmbraceCard;
