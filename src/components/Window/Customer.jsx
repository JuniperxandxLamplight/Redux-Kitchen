import React from 'react';
import customer1 from './../../assets/images/Customer.png';
import customer2 from './../../assets/images/Customer2.png';
import customer3 from './../../assets/images/Customer3.png';

function Customer(){
  const customers = [customer1, customer2, customer3];
  return(
    <div>
      <img src={customers[(Math.floor(Math.random()*4)) - 1]} alt="customer"/>
    </div>
  )
}

export default Customer;
