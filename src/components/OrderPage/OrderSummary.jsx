import React from "react";

function OrderSummary({
  quantity,
  onDecrease,
  onIncrease,
  extrasTotal,
  totalPrice,
  onSubmit,
  isFormValid,
  isSubmitting,
}) {
  return (
    <section className="summary-wrapper">
      <div className="quantity-box">
        <button type="button" onClick={onDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={onIncrease}>
          +
        </button>
      </div>

      <div className="summary-card">
        <h3>Sipariş Toplamı</h3>

        <div className="summary-line">
          <span>Seçimler</span>
          <span>{extrasTotal.toFixed(2)}₺</span>
        </div>

        <div className="summary-line total">
          <span>Toplam</span>
          <span>{totalPrice.toFixed(2)}₺</span>
        </div>

        <button
          type="button"
          className="order-btn"
          onClick={onSubmit}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
        </button>
      </div>
    </section>
  );
}

export default OrderSummary;