import React from 'react';
import styles from './styles';
import ButterButton from './../ButterButton';

function WelcomeWaffle() {
  return (
    <div>
      <img
        style={styles}
        src={require("./../../../assets/images/welcomeWaffle.png")}
      />
    </div>
  )
}

export default WelcomeWaffle;
