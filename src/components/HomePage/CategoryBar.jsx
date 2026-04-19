import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    icon: "/images/iteration-2-images/icons/1.svg",
    label: "YENİ! Kore",
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
    label: "Kızartmalar",
  },
  {
    id: 5,
    icon: "/images/iteration-2-images/icons/5.svg",
    label: "Fast food",
  },
  {
    id: 6,
    icon: "/images/iteration-2-images/icons/6.svg",
    label: "Gazlı İçecek",
  },
];

function CategoryBar() {
  return (
    <section className="category-bar">
      <div className="container category-bar-inner">
        {categories.map((category) => (
          <Link to="/order" key={category.id} className="category-link">
            <div className="category-item">
              <img src={category.icon} alt={category.label} />
              <span>{category.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryBar;