import React from 'react';
import styles from './styles';
import {Link} from 'react-router-dom';

function ButterButton() {
  return (
    <Link to='/game'>
      <img
        style={styles}
        src={require("./../../../assets/images/butterButton.png")}
        />
    </Link>

  )
}

export default ButterButton;
