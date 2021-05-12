import React, { useEffect } from "react";
import Instructions from "../components/Instructions/Instructions.js";
import SideBtns from "../components/SideBtns/SideBtns.js";
import Setup from "../components/Setup/Setup.js";

import { useGameContext } from "../utils/GameState";

const Pregame = () => {
  const [state, dispatch] = useGameContext();

  return (
    <div className="container">
      <h1>{`${state.player.userName} vs ${state.opponent.userName}` || ""}</h1>
      <Instructions />
      <br />
      <SideBtns />
      <br />
      <Setup />
    </div>
  );
};

export default Pregame;
