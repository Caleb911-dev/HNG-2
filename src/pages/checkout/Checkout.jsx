import Navbar2 from "../../components/Navbar2";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkoutPage">
      <Navbar2 title="Checkout" />
      <section className="payment">
        <h2>Add Payment</h2>
        <h4>Make your selection</h4>
        <div className="atmCard">
          <input type="radio" className="rad" />
          <label className="debit">Debit Card</label>
          <input type="radio" className="rad" />
          <label>Credit Card</label>
        </div>
        <p className="holder" id="p1">
          Card Holder Name
        </p>
        <input type="text" className="input1" />
        <div className="sect1">
          <div>
            <p className="holder">Card Number</p>
            <input
              type="text"
              className="input1"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>
          <div>
            <p className="holder">Expiry Date</p>
            <input type="text" className="input1" placeholder=" MM /YYYY" />
          </div>
          <div>
            <p className="holder">CVV</p>
            <input type="text" className="input1" />
          </div>
        </div>
        <h2 className="delivery">Deivery details</h2>
        <h4 className="deliveryDets">Input your delivery details</h4>
        <div className="sect2">
          <div>
            <p className="holder">House No.</p>
            <input type="text" className="inputSpecial" />
          </div>
          <div>
            <p className="holder">Street Name</p>
            <input type="text" className="input2" />
          </div>
          <div>
            <p className="holder">Area Name</p>
            <input type="text" className="input2" />
          </div>
        </div>
        <div className="sect3">
          <div>
            <p className="holder">City</p>
            <input type="text" className="input2" />
          </div>
          <div>
            <p className="holder">State</p>
            <input type="text" className="input2" />
          </div>
          <div>
            <p className="holder">Country</p>
            <input type="text" className="input2" />
          </div>
        </div>
        <Link to="/product">
          <button className="order">Place Order</button>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;
