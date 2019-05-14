import React from 'react';
import SpeechBubble from './SpeechBubble';
import Customer from './Customer';

function WindowContainer() {
  return (
    <div>
      <p>I'm the window container!</p>
      <SpeechBubble/>
      <Customer/>
    </div>
  );
}

export default WindowContainer;
