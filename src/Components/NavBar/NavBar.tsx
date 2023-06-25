import React from "react";
import "./NavBar.css";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: {cartItemsCount} </div>;
};

export default NavBar;
