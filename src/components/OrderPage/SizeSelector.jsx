import React from "react";

function SizeSelector({ size, setSize }) {
  const sizes = ["S", "M", "L"];

  return (
    <section className="selector-box">
      <h3>
        Boyut Seç <span>*</span>
      </h3>

      <div className="size-options">
        {sizes.map((item) => (
          <label
            key={item}
            className={`size-label ${size === item ? "active" : ""}`}
          >
            <input
              type="radio"
              name="pizza-size"
              value={item}
              checked={size === item}
              onChange={(e) => setSize(e.target.value)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </section>
  );
}

export default SizeSelector;