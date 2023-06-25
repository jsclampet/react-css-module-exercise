import React from "react";
import { useState } from "react";
import "./Pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Pepperoni"] });
  };
  return (
    <div>
      <h1>Pizza</h1>
      {pizza.toppings}
      <button onClick={handleClick}>Add Topping</button>
    </div>
  );
};

export default Pizza;
