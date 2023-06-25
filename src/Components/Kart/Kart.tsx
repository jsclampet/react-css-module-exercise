import React from "react";
import "./Kart.css";
import { useState } from "react";

const Kart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <p>Kart</p>
      <button onClick={handleClick}>Kart Click</button>
      <br></br>
      <p>Title: {cart.items[0].title}</p>
      <p>Quantity: {cart.items[0].quantity}</p>
    </div>
  );
};

export default Kart;
