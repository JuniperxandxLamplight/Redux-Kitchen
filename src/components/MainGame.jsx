import React from 'react';
import GameContainer from'./GameContainer';
import InstructionsDisplay from'./LeftPanel/InstructionsDisplay';
import StateContainer from './RightPanel/StateContainer';

function MainGame() {
  return(
    <div>
      <p>I am Main Container</p>
      <GameContainer/>
      <InstructionsDisplay/>
      <StateContainer/>
    </div>
  );
}

export default MainGame;
