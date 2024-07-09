import Navbar2 from "../../components/Navbar2";
import Scart from "../../images/SAD CART.png";
import { Link } from "react-router-dom";

import "./cart.css";

const cart = () => {
  return (
    <div className="sadSection">
      <Navbar2 title="My cart" />
      <div className="sadCart">
        <img src={Scart} alt="" />
        <h5>Your cart is empty</h5>
        <p>you have no items in your shopping cart. Let's go buy something</p>
        <Link to="/product">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default cart;
