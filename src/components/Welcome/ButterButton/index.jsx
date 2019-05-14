import React from 'react';
import styles from './styles';

function ButterButton() {
  return (
    <img
      style={styles}
      src={require('./../../../assets/images/butterButton.png')}
    />
  );
}

export default ButterButton;
