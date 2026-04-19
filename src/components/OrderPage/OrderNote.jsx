import React from "react";

function OrderNote({ note, setNote }) {
  return (
    <section className="order-note-section">
      <h3>Sipariş Notu</h3>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        className="order-note-textarea"
        rows="4"
        data-testid="order-note"
      />
    </section>
  );
}

export default OrderNote;