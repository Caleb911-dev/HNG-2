import "./productCard.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="cardInfo">
        <h2 className="title">{title}</h2>
        <h6 className="price">${price}</h6>
        <div className="test">
          <Link to="/checkout">
            <button className="productButton">ADD TO CART</button>
          </Link>
          <FavoriteBorderOutlinedIcon className="emoji" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
