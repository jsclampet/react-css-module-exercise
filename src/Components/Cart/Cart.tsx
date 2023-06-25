import React from "react";
import "./Cart.css";

interface Props {
  cartItems: string[];
  handleClear: () => void;
}
const Cart = ({ cartItems, handleClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={crypto.randomUUID()}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default Cart;
