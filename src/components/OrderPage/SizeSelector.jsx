import React from "react";

function SizeSelector({ size, setSize }) {
  const sizes = ["S", "M", "L"];

  return (
    <div className="selector-box">
      <h3>
        Boyut Seç <span>*</span>
      </h3>

      <div className="size-options">
        {sizes.map((item) => (
          <button
            key={item}
            className={`size-btn ${size === item ? "active" : ""}`}
            onClick={() => setSize(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;