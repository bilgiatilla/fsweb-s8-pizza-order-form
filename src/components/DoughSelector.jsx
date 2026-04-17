import React from "react";

function DoughSelector({ dough, setDough }) {
  return (
    <div className="selector-box">
      <h3>
        Hamur Seç <span>*</span>
      </h3>

      <select
        className="dough-select"
        value={dough}
        onChange={(e) => setDough(e.target.value)}
      >
        <option value="">--Hamur Kalınlığı Seç --</option>
        <option value="İnce">İnce</option>
        <option value="Orta">Orta</option>
        <option value="Kalın">Kalın</option>
      </select>
    </div>
  );
}

export default DoughSelector;