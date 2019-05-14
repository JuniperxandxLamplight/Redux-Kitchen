import React from 'react';
import WindowContainer from'./Window/WindowContainer';
import CounterContainer from'./Counter/CounterContainer';

function GameContainer() {
  return(
    <div>
      <p>I am Game Container</p>
      <WindowContainer />
      <CounterContainer />
    </div>

  );
}

export default GameContainer;
