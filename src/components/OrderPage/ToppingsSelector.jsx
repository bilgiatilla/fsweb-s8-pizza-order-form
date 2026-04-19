import React from "react";

function ToppingsSelector({
  toppings,
  selectedToppings,
  handleToppingChange,
}) {
  const hasMinError =
    selectedToppings.length > 0 && selectedToppings.length < 4;

  return (
    <section className="toppings-section">
      <h3>Ek Malzemeler</h3>
      <p className="topping-note">
        En az 4, en fazla 10 malzeme seçebilirsiniz. Her biri 5₺
      </p>

      <div className="toppings-grid">
        {toppings.map((topping) => {
          const isChecked = selectedToppings.includes(topping);
          const isDisabled = !isChecked && selectedToppings.length >= 10;

          return (
            <label
              key={topping}
              className={`topping-item ${isDisabled ? "disabled" : ""}`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                disabled={isDisabled}
                onChange={() => handleToppingChange(topping)}
              />
              <span className="custom-checkbox">{isChecked ? "✓" : ""}</span>
              <span>{topping}</span>
            </label>
          );
        })}
      </div>

      {hasMinError && (
        <p className="field-error">
          En az 4 malzeme seçmelisin.
        </p>
      )}
    </section>
  );
}

export default ToppingsSelector;