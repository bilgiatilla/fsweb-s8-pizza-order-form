import React from "react";

function NameInput({ customerName, setCustomerName }) {
  const hasError = customerName.length > 0 && customerName.trim().length < 3;

  return (
    <section className="name-input-section">
      <h3>
        İsim <span>*</span>
      </h3>

      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="İsmini gir"
        className={`name-input ${hasError ? "input-error" : ""}`}
        minLength={3}
        required
        data-testid="name-input"
      />

      {hasError && (
        <p className="field-error">İsim en az 3 karakter olmalı.</p>
      )}
    </section>
  );
}

export default NameInput;