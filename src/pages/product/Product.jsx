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
import concealer from "../../images/concealer.png";
import eyeshadow from "../../images/eyeshadow.png";
import brushset from "../../images/brushset.png";
import eyemas from "../../images/eyemas.png";
import facepowder from "../../images/FACE POWDER.png";
import skyline from "../../images/skyline.png";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=ba2c7b2438954fe78cec19ff8224776c&Appid=&Apikey=",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          {products
            .filter((product) => product.categories[0].name == "face")
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`https:api.timbu.cloud/images/${product.photos[0].url}`}
                  title={product.name}
                  price={product.current_price[0].USD[0]}
                />
              );
            })}
        </Carousel>

        <h1>Eyes</h1>
        <Carousel responsive={responsive}>
          {products
            .filter((product) => product.categories[0].name == "eyes")
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`https:api.timbu.cloud/images/${product.photos[0].url}`}
                  title={product.name}
                  price={product.current_price[0].USD[0]}
                />
              );
            })}
        </Carousel>
        <h1>Lip</h1>
        <Carousel responsive={responsive}>
          {products
            .filter((product) => product.categories[0].name == "lip")
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`https:api.timbu.cloud/images/${product.photos[0].url}`}
                  title={product.name}
                  price={product.current_price[0].USD[0]}
                />
              );
            })}
        </Carousel>
        <h1>Makeup</h1>
        <Carousel responsive={responsive}>
          {products
            .filter((product) => product.categories[0].name == "makeup")
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`https:api.timbu.cloud/images/${product.photos[0].url}`}
                  title={product.name}
                  price={product.current_price[0].USD[0]}
                />
              );
            })}
        </Carousel>
        <h1>Makeup Kit</h1>
        <Carousel responsive={responsive}>
          {products
            .filter((product) => product.categories[0].name == "makeup kit")
            .map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  image={`https:api.timbu.cloud/images/${product.photos[0].url}`}
                  title={product.name}
                  price={product.current_price[0].USD[0]}
                />
              );
            })}
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
