import React from 'react';
import {styles, waffleStyles, messageStyles} from './styles';
import WelcomeWaffle from './WelcomeWaffle';
import WelcomeMessage from './WelcomeMessage';

function Welcome() {
  return (
    <div style={styles}>

      <div style={waffleStyles}>
        <WelcomeWaffle/>
      </div>

      <div style={messageStyles}>
        <WelcomeMessage/>
      </div>
    </div>
  )
}

export default Welcome;
