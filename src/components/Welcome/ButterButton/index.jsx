import React from 'react';
import styles from './styles';
import {Link} from 'react-router-dom';

function ButterButton(props) {
  return (
    <img onClick={props.onIntroChange}
      style={styles}
      src={require('./../../../assets/images/butterButton.png')}
    />
  );
}

export default ButterButton;
