import React from 'react';
import styles from './styles';

function Waffle() {
  return (
    <img
      style={styles}
      src={require("../../assets/images/waffle.png")}
      />
  )
};

export default Waffle;
