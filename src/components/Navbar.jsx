import logo from "../images/GLAMOUR Logo (2) 3.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="navContent">
        <Link to="/product" style={{ textDecoration: "none" }}>
          <p>Product</p>
        </Link>
        <p className="about">About Us</p>
        <p>Shop</p>
      </div>
      <div className="navIcons">
        <SearchOutlinedIcon fontSize="small" className="icons" />
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <ShoppingCartOutlinedIcon fontSize="small" className="icons" />
        </Link>
        <PersonOutlineOutlinedIcon fontSize="small" className="icons" />
      </div>
    </div>
  );
};

export default Navbar;
