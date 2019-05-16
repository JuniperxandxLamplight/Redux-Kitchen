import React from 'react';
import {imageStyles, butterStyles} from './styles';
import ButterButton from './../ButterButton';

function WelcomeWaffle(props) {
  return (
    <div style={{position: 'relative'}}>
      <img
        style={imageStyles}
        src={require('./../../../assets/images/welcomeWaffle.png')}
      />
      <div style={butterStyles}>
        <ButterButton  onIntroChange={props.onIntroChange}/>
      </div>
    </div>

  );
}

export default WelcomeWaffle;
