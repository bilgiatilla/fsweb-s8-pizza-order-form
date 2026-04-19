import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const tabs = [
  {
    id: 1,
    icon: "/images/iteration-2-images/icons/1.svg",
    label: "Ramen",
  },
  {
    id: 2,
    icon: "/images/iteration-2-images/icons/2.svg",
    label: "Pizza",
  },
  {
    id: 3,
    icon: "/images/iteration-2-images/icons/3.svg",
    label: "Burger",
  },
  {
    id: 4,
    icon: "/images/iteration-2-images/icons/4.svg",
    label: "French fries",
  },
  {
    id: 5,
    icon: "/images/iteration-2-images/icons/5.svg",
    label: "Fast food",
  },
  {
    id: 6,
    icon: "/images/iteration-2-images/icons/6.svg",
    label: "Soft drinks",
  },
];

const products = [
  {
    id: 1,
    image: "/images/iteration-2-images/pictures/food-1.png",
    title: "Terminal Pizza",
    rating: "4.9",
    reviews: "200",
    price: 60,
  },
  {
    id: 2,
    image: "/images/iteration-2-images/pictures/food-2.png",
    title: "Position Absolute Acı Pizza",
    rating: "4.9",
    reviews: "928",
    price: 85,
  },
  {
    id: 3,
    image: "/images/iteration-2-images/pictures/food-3.png",
    title: "useEffect Tavuklu Burger",
    rating: "4.9",
    reviews: "462",
    price: 75,
  },
];

function ProductSection() {
  const [activeTab, setActiveTab] = useState("Pizza");

  return (
    <section className="product-section">
      <div className="container">
        <p className="section-script">en çok paketlenen menüler</p>
        <h2 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="product-tabs">
          {tabs.map((tab) => (
            <Link to="/order" key={tab.id} className="tab-link">
              <button
                className={`product-tab ${
                  activeTab === tab.label ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <img src={tab.icon} alt={tab.label} />
                <span>{tab.label}</span>
              </button>
            </Link>
          ))}
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;