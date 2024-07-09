import "./navbar2.css";
import logo from "../images/GLAMOUR Logo (2) 3.png";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const Navbar2 = ({ title }) => {
  return (
    <div className="nav2">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="nav2Description">
        <h1>{title}</h1>
      </div>
      <div>
        <SearchOutlinedIcon className="icons2" />
        <ShoppingCartOutlinedIcon className="icons2" />
        <PersonOutlineOutlinedIcon className="icons2" />
      </div>
    </div>
  );
};

export default Navbar2;
