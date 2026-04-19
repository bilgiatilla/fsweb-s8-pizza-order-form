import React from "react";
import { useLocation, Link } from "react-router-dom";

function SuccessPage() {
  const { state } = useLocation();

  const orderData = state || {
    productName: "Position Absolute Acı Pizza",
    size: "L",
    dough: "Süper İnce",
    selectedToppings: ["Pepperoni", "Sosis", "Mısır", "Ananas", "Jalepeno"],
    extrasTotal: 25,
    totalPrice: 110.5,
  };

  return (
    <main className="success-page">
      <div className="success-container">
        <h1 className="success-logo">Teknolojik Yemekler</h1>

        <p className="success-script">lezzetin yolda</p>

        <h2 className="success-title">SİPARİŞ ALINDI</h2>

        <div className="success-divider"></div>

        <section className="success-product-section">
          <h3 className="success-product-title">{orderData.productName}</h3>

          <div className="success-details">
            <p>
              <span>Boyut:</span> <strong>{orderData.size}</strong>
            </p>
            <p>
              <span>Hamur:</span> <strong>{orderData.dough}</strong>
            </p>
            <p className="toppings-line">
              <span>Ek Malzemeler:</span>{" "}
              <strong>{orderData.selectedToppings.join(", ")}</strong>
            </p>
          </div>
        </section>

        <section className="success-summary-card">
          <h3>Sipariş Toplamı</h3>

          <div className="success-summary-row">
            <span>Seçimler</span>
            <strong>{orderData.extrasTotal.toFixed(2)}₺</strong>
          </div>

          <div className="success-summary-row">
            <span>Toplam</span>
            <strong>{orderData.totalPrice.toFixed(2)}₺</strong>
          </div>
        </section>

        <Link to="/" className="success-home-link">
          Anasayfaya Dön
        </Link>
      </div>
    </main>
  );
}

export default SuccessPage;