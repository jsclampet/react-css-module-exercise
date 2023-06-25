import React from "react";
import { useState } from "react";
import "./Game.css";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: "Steven" } });
  };

  return (
    <div>
      <p>{game.player.name}</p>
      <button onClick={handleClick}>Update Name</button>
    </div>
  );
};

export default Game;
