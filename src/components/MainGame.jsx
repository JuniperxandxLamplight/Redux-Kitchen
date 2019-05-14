import React from 'react';
import GameContainer from'./GameContainer';
import InstructionsDisplay from'./LeftPanel/InstructionsDisplay';
import CounterContainer from'./Counter/CounterContainer';

function MainGame() {
  return(
    <div>
      <p>I am Game Container</p>
      <GameContainer />
      <InstructionsDisplay />
    </div>

  )
}

export default MainGame;
