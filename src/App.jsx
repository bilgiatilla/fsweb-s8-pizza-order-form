import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import PizzaInfo from "./components/PizzaInfo";
import SizeSelector from "./components/SizeSelector";
import DoughSelector from "./components/DoughSelector";
import ToppingsSelector from "./components/ToppingsSelector";
import OrderNote from "./components/OrderNote";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";

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

function App() {
  const basePrice = 85.5;
  const toppingPrice = 5;

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
  }, [basePrice, extrasTotal, quantity]);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
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
      size,
      dough,
      selectedToppings,
      note,
      quantity,
      totalPrice,
    };

    console.log("Sipariş verildi:", orderData);
    alert("Sipariş başarıyla oluşturuldu.");
  };

  return (
    <div className="page">
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
          <PizzaInfo />

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

export default App;