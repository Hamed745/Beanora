import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Your Perfect <br />
          <span>Coffee, Delivered</span>
        </h1>
        <p className="hero-description">
          Order from Beanora and enjoy fresh brews, handpicked beans,
          and a warm coffee experience delivered right to your doorstep.
        </p>
        <div className="hero-actions">
          <Link to="/menu" className="btn-hero-primary">
            Order Now <i className="bi bi-arrow-right-short"></i>
          </Link>
          <a href="#categories" className="btn-hero-secondary">
            Explore Menu
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-badge">
          <span>★ 4.9</span>
          <p>Top Rated Brews</p>
        </div>
       
           <img src="/H.coffe.png" alt="Beanora Fresh Coffee" className="hero-img" />      </div>
    </section>
  );
}

export default Hero;