import React from 'react';
import SpeechBubble from './SpeechBubble';
import Customer from './Customer';
import Upkeep from './Upkeep';

function WindowContainer() {
  return (
    <div>
      <p>I'm the window container!</p>
      <div className="customerBox">
        <Customer/>
        <SpeechBubble className="speech"/>
      </div>
      <Upkeep/>
      <style  jsx>{`
        .customerBox{
          height: 100%;
          width: 100%;
          display: grid;
          grid-template: 1fr / 2fr 1fr;
        }
      `}</style>
    </div>
  )
}

export default WindowContainer;
