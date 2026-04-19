import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ image, title, rating, reviews, price }) {
  return (
    <Link to="/order" className="product-card-link">
      <article className="product-card">
        <img src={image} alt={title} className="product-image" />

        <div className="product-card-body">
          <h3>{title}</h3>

          <div className="product-meta">
            <span>{rating}</span>
            <span>({reviews})</span>
            <strong>{price}₺</strong>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;