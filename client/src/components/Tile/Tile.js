import React from "react";
import { useGameContext } from "../../utils/GameState";

const Tile = ({ tile, index, action }) => {
  const [state, dispatch] = useGameContext();
  return (
    <button
      style={{
        gridColumn: (index % 10) + 1,
        gridRow: Math.floor(index / 10) + 1,
        backgroundColor: tile.contents ? "red" : "blue",
        border: `3px solid ${tile.status}`
      }}
      onClick={() => dispatch({ type: "PLACE_PET", data: index })}
      onMouseEnter={() => dispatch({ type: "SET_HOVER", data: index })}
      onMouseLeave={() => dispatch({ type: "CLEAR_HOVER", data: index })}
    ></button>
  );
};

export default Tile;
