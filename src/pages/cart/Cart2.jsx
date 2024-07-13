import "./cart2.css";
import Navbar2 from "../../components/Navbar2";
import { Link } from "react-router-dom";
import mas1 from "../../images/mas1.png";

const Cart2 = () => {
  return (
    <div className="cartSection">
      <Navbar2 title="My cart" />
      <div className="header">
        <h3 className="prod">Products</h3>
        <h3 className="qty">Quantity</h3>
        <h3>price</h3>
      </div>
      <div className="header">
        <div className="prodAmount">
          <img src={mas1} alt="" />
          <span>
            <h6>EXPRESS CONTROL MASCARA</h6>
          </span>
        </div>
        <div className="increment">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <h6>$7.99</h6>
      </div>
      <div className="header">
        <h6 className="prodTotal">Total Amount</h6>
        <h6>$7.99</h6>
      </div>
      <div className="bottom">
        <Link to="/checkout">
          <button>Proceed To Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart2;
