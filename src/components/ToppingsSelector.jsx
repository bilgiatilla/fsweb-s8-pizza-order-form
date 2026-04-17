import React from "react";

function ToppingsSelector({
  toppings,
  selectedToppings,
  handleToppingChange,
}) {
  return (
    <section className="toppings-section">
      <h3>Ek Malzemeler</h3>
      <p className="topping-note">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <div className="toppings-grid">
        {toppings.map((topping) => (
          <label key={topping} className="topping-item">
            <input
              type="checkbox"
              checked={selectedToppings.includes(topping)}
              onChange={() => handleToppingChange(topping)}
            />
            <span className="custom-checkbox">
              {selectedToppings.includes(topping) ? "✓" : ""}
            </span>
            <span>{topping}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default ToppingsSelector;