import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import homeImage from "../../images/home.png";
import Card from "../../components/Card";
import EmbraceCard from "../../components/EmbraceCard";
import TestimonialCard from "../../components/TestimonialCard";
import Emily from "../../images/Emily.png";
import Grace from "../../images/Grace.png";
import Beatrice from "../../images/Beatrice.png";
import Flora from "../../images/Flora.png";

import mascara from "../../images/MASCARA.png";

import lipgloss from "../../images/lipgloss.png";
import nude from "../../images/nude.png";
import facePowder from "../../images/FACE POWDER.png";
import blush from "../../images/blush.png";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="homeSection">
        <div className="homeDescription">
          <h1>YOUR BEAUTY OUR PASSION</h1>
          <p>
            Empowering Your Beauty Innovation, Transforming Your Look, One
            Product At A Time
          </p>
          <Link to="/product">
            <button>SHOP NOW</button>
          </Link>
        </div>
        <div className="homeImg">
          <img src={homeImage} alt="" />
        </div>
      </section>
      <section className="cardSection">
        <h1>New Arrivals</h1>
        <div className="cards">
          <Card image={mascara} title="XPRESS CONTROL MASCARA" price="$7.99" />
          <Card image={facePowder} title="LAKME FACE POWDER" price="$19.99" />
          <Card
            image={nude}
            title="NUDE BY NATURE FACE POWDER"
            price="$10.99"
          />
          <Card image={lipgloss} title="241 LIP GLOSS" price="$9.99" />
        </div>
      </section>
      <section className="discoverSection">
        <div className="discoverImg">
          <img src={blush} alt="" />
        </div>
        <div className="discoverDescription">
          <h1>Discover The Magic Of Beauty</h1>
          <p>
            Step Into The World Of Beauty With Our Collection Of Cosmetics. We
            Collaborate With The Most Prestigious Beauty Brands From Around The
            Globe To Offer You The Finest And Trendiest Products Available
          </p>
        </div>
      </section>
      <section className="embraceSection">
        <h1>Embrace The Magic Of Glamor Store</h1>
        <div className="embrace">
          <EmbraceCard
            title="Quality Products"
            content="Our Dedicated Customer Support Team is Always
          Available To Assist You With Any Queries, Concerns"
          />
          <EmbraceCard
            title="Affordable Prices"
            content="We Understand That Navigating The Beauty World Can Be Overwhelming At Times"
          />
          <EmbraceCard
            title="Fast Delivery"
            content="Products Are Delivered Fast And Safe. We Got You Covered"
          />
        </div>
      </section>
      <section className="testimonial">
        <h1>WHAT PEOPLE SAY ABOUT OUR PRODUCT</h1>
        <div className="testimonialCard">
          <TestimonialCard
            content="This Powder Is Amazing! It Sets
             My Makeup Perfectly And Gives Me A Flawless Finish.I've Received So Many Compliments Since
             I Started Using It"
            image={Emily}
            title="Emily"
            star="⭐⭐⭐⭐⭐"
          />
          <TestimonialCard
            content="This Lip Gloss Is My New Favorite! The Color Is Gorgeous 
            And It Feels So Mositurizing
            On My Lips"
            image={Grace}
            title="Grace"
            star="⭐⭐⭐⭐"
          />
          <TestimonialCard
            content="I Was Surprised By How Long Lasting This Gloss Is. It Lasts All 
            Day Without Fading Or Drying Out My Lips"
            image={Beatrice}
            title="Beatrice"
            star="⭐⭐⭐⭐"
          />
          <TestimonialCard
            content="I Was Blown Away By how Smooth And Silky This Powder Feels. Its 
            Like A Second Skin"
            image={Flora}
            title="Flora"
            star="⭐⭐⭐"
          />
        </div>
        <div className="insta">
          <p>Follow Us On Instagram: @Glamourcosmeticstore</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
