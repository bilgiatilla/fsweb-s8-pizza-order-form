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
import NameInput from "../components/OrderPage/NameInput";
import axios from "axios";

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
  const [customerName, setCustomerName] = useState("");
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameIsValid = customerName.trim().length >= 3;
  const sizeIsValid = size !== "";
  const doughIsValid = dough !== "";
  const toppingsAreValid =
    selectedToppings.length >= 4 && selectedToppings.length <= 10;

  const handleToppingChange = (topping) => {
    const exists = selectedToppings.includes(topping);

    if (exists) {
      setSelectedToppings((prev) => prev.filter((item) => item !== topping));
      return;
    }

    if (selectedToppings.length >= 10) return;

    setSelectedToppings((prev) => [...prev, topping]);
  };

  const extrasTotal = selectedToppings.length * toppingPrice;

  const totalPrice = useMemo(() => {
    return (basePrice + extrasTotal) * quantity;
  }, [extrasTotal, quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const isFormValid =
    nameIsValid && sizeIsValid && doughIsValid && toppingsAreValid;

  const handleSubmit = async () => {
    if (!isFormValid || isSubmitting) {
      return;
    }

    const orderData = {
      customerName: customerName.trim(),
      productName: "Position Absolute Acı Pizza",
      size,
      dough,
      selectedToppings,
      note: note.trim(),
      quantity,
      extrasTotal,
      totalPrice,
    };

    const payload = {
  data: {
    customerName: customerName.trim(),
    productName: "Position Absolute Acı Pizza",
    size,
    dough,
    selectedToppings,
    note: note.trim(),
    quantity,
    extrasTotal,
    totalPrice,
  },
};

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        "https://reqres.in/api/collections/products/records?project_id=13945",
        payload,
        {
          headers: {
            "x-api-key": "pro_530c5b170a6ede890ce195eada300915f4ed06419b7a0af862879b77e6591d27",
            "Content-Type": "application/json",
          },
        },
      );

      console.log("API response:", response.data);
      console.log("Sipariş özeti:", {
        ...orderData,
        response: response.data,
      });

      navigate("/success", {
        state: {
          ...orderData,
          response: response.data,
        },
      });
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error.response?.data || error.message);
      alert("Sipariş gönderilirken bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
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

          <NameInput
            customerName={customerName}
            setCustomerName={setCustomerName}
          />

          <OrderNote note={note} setNote={setNote} />

          <OrderSummary
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            extrasTotal={extrasTotal}
            totalPrice={totalPrice}
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
            isSubmitting={isSubmitting}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OrderPage;
