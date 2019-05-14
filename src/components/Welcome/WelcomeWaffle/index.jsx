import React from 'react';
import {imageStyles, butterStyles} from './styles';
import ButterButton from './../ButterButton';

function WelcomeWaffle() {
  return (
    <div style={{position: "relative"}}>
      <img
        style={imageStyles}
        src={require("./../../../assets/images/welcomeWaffle.png")}
      />
    <div style={butterStyles}>
        <ButterButton/>
      </div>
    </div>

  )
}

export default WelcomeWaffle;
