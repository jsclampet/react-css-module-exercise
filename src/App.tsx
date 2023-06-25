import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Like from "./Components/Like";
import NavBar from "./Components/NavBar/NavBar";
import Cart from "./Components/Cart/Cart";
import Game from "./Components/Game/Game";
import Pizza from "./Components/Pizza/Pizza";
import Kart from "./Components/Kart/Kart";
import ExpandableTxt from "./Components/ExpandableTxt/ExpandableTxt";

function App() {
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);

  const handleClear = () => {
    setCartItems([]);
  };

  return (
    <>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} handleClear={handleClear} />
      </div>
      <hr />
      <Game />
      <hr />
      <Pizza />
      <hr />
      <Kart />
      <hr />
      <hr />
      <hr />
      <hr />
      <ExpandableTxt maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate
        distinctio, corporis accusamus voluptates similique impedit atque
        laborum vitae iste, iure id! Eum inventore, consectetur, cupiditate
        porro modi tempora, sequi quae recusandae doloremque quas earum.
        Distinctio aliquid culpa, quasi quisquam praesentium minima ipsam, ab
        blanditiis, dolores qui facere quod ex voluptatibus temporibus similique
        at unde necessitatibus repellendus eos natus deleniti eum accusamus!
        Laudantium unde nostrum animi perspiciatis minus, iusto sint! Tempora
        illo iusto molestias quos. Deleniti eius molestiae cum culpa!
      </ExpandableTxt>
    </>
  );
}

export default App;
