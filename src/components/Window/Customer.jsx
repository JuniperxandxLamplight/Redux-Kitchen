import React from 'react';
import customer1 from './../../assets/images/Customer.png';
import customer2 from './../../assets/images/Customer2.png';
import customer3 from './../../assets/images/Customer3.png';

function Customer(){
  const customers = [customer1, customer2, customer3];
  const trial = customers[(Math.floor(Math.random()*customers.length))]
  console.log(trial);
  return(
    <div>
      <img src={trial} alt="customer"/>
      <style jsx>{`
        div{
          width: 100%;
        };
        img{
          width: 75%;
          height: auto;
          margin-left: 25%;
        }
      `}</style>
    </div>
  )
}

export default Customer;
