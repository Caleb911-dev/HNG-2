import "./product.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProductCard from "../../components/ProductCard";
import mascara from "../../images/MASCARA.png";
import nude from "../../images/nude.png";
import nudelipgloss from "../../images/nudeLipgloss.png";
import makeupset8 from "../../images/makeupset (8).png";
import makeupset from "../../images/makeup set.png";
import makeupset3 from "../../images/makeupset (3).png";
import lipgloss from "../../images/lipgloss.png";
import lipstick from "../../images/lipstick.png";
import lens from "../../images/lens.png";
import home from "../../images/home.png";
import concealer from "../../images/concealer.png";
import eyeshadow from "../../images/eyeshadow.png";
import brushset from "../../images/brushset.png";
import eyemas from "../../images/eyemas.png";
import facepowder from "../../images/FACE POWDER.png";
import skyline from "../../images/skyline.png";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Footer from "../../components/Footer";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="backdrop">
        <div className="nav">
          <div className="navContent1">
            <p className="active">Product</p>
            <p className="about">About Us</p>
            <p>Shop</p>
          </div>
          <div className="navIcon1">
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className="icons1" />
            </Link>
            <PersonOutlineOutlinedIcon className="icons1" />
          </div>
        </div>
        <div className="search">
          <SearchOutlinedIcon />
          <input
            type="text"
            className="searchInput"
            placeholder="Search Products"
          />
        </div>
      </section>
      <section className="listings">
        <h1 className="face">Face</h1>
        <Carousel responsive={responsive}>
          <ProductCard
            image={facepowder}
            title="LAKME FACE POWDER"
            price="$7.99"
          />
          <ProductCard
            image={nude}
            title="NUDE BY NATURE POWDER"
            price="$16.99"
          />
          <ProductCard
            image={concealer}
            title="FACE CONCEALER"
            price="$12.99"
          />
          <ProductCard image={nude} title="LAKME FACE POWDER" price="$9.99" />
        </Carousel>

        <h1>Eyes</h1>
        <Carousel responsive={responsive}>
          <ProductCard
            image={mascara}
            title="XPRESS CONTROL MASCARA"
            price="$7.99"
          />
          <ProductCard
            image={eyeshadow}
            title="NUDE EYE SHADOW"
            price="$14.99"
          />
          <ProductCard
            image={makeupset8}
            title="MATT EYE MASCARA"
            price="$8.99"
          />
          <ProductCard
            image={mascara}
            title="XPRESS CONTROL MASCARA"
            price="$7.99"
          />
        </Carousel>
        <h1>Lip</h1>
        <Carousel responsive={responsive}>
          <ProductCard image={lipgloss} title="241 LIPGLOSS" price="$7.99" />
          <ProductCard image={lipstick} title="LAKME LIP STICK" price="$8.99" />
          <ProductCard
            image={nudelipgloss}
            title="NUDE BY NATURE LIPGLOSS"
            price="$19.99"
          />
          <ProductCard
            image={lipgloss}
            title="XPRESS CONTROL MASCARA"
            price="$7.99"
          />
        </Carousel>
        <h1>Makeup</h1>
        <Carousel responsive={responsive}>
          <ProductCard
            image={brushset}
            title="XPRESS CONTROL BRUSH SET"
            price="$24.99"
          />
          <ProductCard
            image={eyemas}
            title="LAKME EYE MASCARA"
            price="$14.99"
          />
          <ProductCard
            image={makeupset}
            title="3 IN 1 MAKEUUP SET"
            price="$19.99"
          />
          <ProductCard
            image={brushset}
            title="LAKME EYE SHADOW"
            price="$7.99"
          />
        </Carousel>
        <h1>Makeup Kit</h1>
        <Carousel responsive={responsive}>
          <ProductCard
            image={lens}
            title="BEAUTY CONTACT LENS"
            price="$29.99"
          />
          <ProductCard
            image={skyline}
            title="SKYLINE MAKEUP BAG"
            price="$19.99"
          />
          <ProductCard
            image={makeupset3}
            title="MERBAY CLEAR MAKEUP BAG"
            price="$21.99"
          />
          <ProductCard image={home} title="HOME MAKEUP KIT" price="$24.99" />
        </Carousel>
      </section>
      <div className="instag">
        <p>Follow Us On Instagram: @Glamourcosmeticstore</p>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
