import React from "react";
import Hero from "../components/HomePage/Hero";
import CategoryBar from "../components/HomePage/CategoryBar";
import PromoSection from "../components/HomePage/PromoSection";
import ProductSection from "../components/HomePage/ProductSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <CategoryBar />
      <PromoSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default HomePage;