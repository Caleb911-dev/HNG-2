import "./testimonialCard.css";

const TestimonialCard = ({ content, image, title, star }) => {
  return (
    <div className="testify">
      <p className="content">{content}</p>
      <div className="avatar">
        <img src={image} alt="" />
        <h6>{title}</h6>
        <span className="test">{star}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
