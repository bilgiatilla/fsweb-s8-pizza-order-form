import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay-decor">
        <img
          src="/images/iteration-2-images/pictures/biber.png"
          alt="Baharat görselleri"
          className="hero-decor-image"
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-logo">Teknolojik Yemekler</h1>
        <p className="hero-script">fırsatı kaçırma</p>
        <h2 className="hero-title">
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </h2>

        <Link to="/order">
          <button className="hero-button">ACIKTIM</button>
        </Link>
      </div>

      <div className="hero-pizza-wrapper">
        <img
          src="/images/iteration-2-images/pictures/food-2.png"
          alt="Büyük pizza"
          className="hero-pizza"
        />
      </div>
    </section>
  );
}

export default Hero;