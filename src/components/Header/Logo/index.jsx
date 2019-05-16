import React from 'react';
import styles from './styles';

function Logo() {
  return (
    <img
      style={styles}
      src={require('./../../../assets/images/logo-fruit.png')}
    />
  );
}

export default Logo;
