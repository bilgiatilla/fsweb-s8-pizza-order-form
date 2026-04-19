import React from "react";

function OrderNote({ note, setNote }) {
  return (
    <section className="order-note-section">
      <h3>Sipariş Notu</h3>
      <input
        type="text"
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="order-note-input"
      />
    </section>
  );
}

export default OrderNote;