import React, { useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SizeSelector from "../components/OrderPage/SizeSelector";
import ToppingsSelector from "../components/OrderPage/ToppingsSelector";
import DoughSelector from "../components/OrderPage/DoughSelector";
import OrderNote from "../components/OrderPage/OrderNote";
import OrderSummary from "../components/OrderPage/OrderSummary";
import PizzaText from "../components/OrderPage/PizzaText";
import { useNavigate } from "react-router-dom";

const toppingsData = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

function OrderPage() {
  const basePrice = 85.5;
  const toppingPrice = 5;
  const navigate = useNavigate();
  const [size, setSize] = useState("M");
  const [dough, setDough] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([
    "Pepperoni",
    "Sosis",
    "Mısır",
    "Ananas",
    "Jalepeno",
  ]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleToppingChange = (topping) => {
    const exists = selectedToppings.includes(topping);

    if (exists) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      if (selectedToppings.length >= 10) return;
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const extrasTotal = selectedToppings.length * toppingPrice;

  const totalPrice = useMemo(() => {
    return (basePrice + extrasTotal) * quantity;
  }, [extrasTotal, quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const isFormValid = size && dough;

  const handleSubmit = () => {
  if (!isFormValid) {
    alert("Lütfen boyut ve hamur seçiniz.");
    return;
  }

  const orderData = {
    productName: "Position Absolute Acı Pizza",
    size,
    dough,
    selectedToppings,
    note,
    quantity,
    extrasTotal,
    totalPrice,
  };

  console.log("Sipariş verildi:", orderData);

  navigate("/success", {
    state: orderData,
  });
};

  return (
    <div className="orderpage">
      <Header />

      <main className="main-content">
        <section className="top-hero">
          <img
            src="/images/iteration-2-images/pictures/form-banner.png"
            alt="Pizza"
            className="hero-pizza-image"
          />
        </section>

        <section className="order-container">
          <PizzaText />

          <div className="selection-row">
            <SizeSelector size={size} setSize={setSize} />
            <DoughSelector dough={dough} setDough={setDough} />
          </div>

          <ToppingsSelector
            toppings={toppingsData}
            selectedToppings={selectedToppings}
            handleToppingChange={handleToppingChange}
          />

          <OrderNote note={note} setNote={setNote} />

          <OrderSummary
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            extrasTotal={extrasTotal}
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OrderPage;