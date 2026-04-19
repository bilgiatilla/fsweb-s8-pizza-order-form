import React from "react";
import { Link } from "react-router-dom";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="container promo-grid">
        <div className="promo-card promo-card-large">
          <div className="promo-card-content">
            <h2>Özel Lezzetus</h2>
            <p>Position:Absolute Acı Burger</p>

            <Link to="/order">
              <button>SİPARİŞ VER</button>
            </Link>
          </div>

          <img
            src="/images/iteration-2-images/cta/kart-1.png"
            alt="Özel lezzet pizza kartı"
            className="promo-large-image"
          />
        </div>

        <div className="promo-card promo-card-dark">
          <div className="promo-card-content">
            <h3>
              Hackathlon
              <br />
              Burger Menü
            </h3>

            <Link to="/order">
              <button>SİPARİŞ VER</button>
            </Link>
          </div>

          <img
            src="/images/iteration-2-images/cta/kart-2.png"
            alt="Burger menü"
            className="promo-side-image"
          />
        </div>

        <div className="promo-card promo-card-light">
          <div className="promo-card-content">
            <h3>
              <span>Çooook</span> hızlı
              <br />
              npm gibi kurye
            </h3>

            <Link to="/order">
              <button>SİPARİŞ VER</button>
            </Link>
          </div>

          <img
            src="/images/iteration-2-images/cta/kart-3.png"
            alt="Kurye görseli"
            className="promo-side-moto-image"
          />
        </div>
      </div>
    </section>
  );
}

export default PromoSection;