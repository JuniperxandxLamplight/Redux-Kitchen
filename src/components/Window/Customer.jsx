import React from 'react';
import customer1 from './../../assets/images/Customer.png';
import customer2 from './../../assets/images/Customer2.png';
import customer3 from './../../assets/images/Customer3.png';

function Customer(){
  const customers = [customer1, customer2, customer3];
  return(
    <div>
      <img src={customers[(Math.floor(Math.random()*customers.length))]} alt="customer"/>
      <style jsx>{`
        div{
          width: 100%;
          height: 100%;
        };
        img{
          height: 100%;
        };
        @media only screen and (min-width: 1450px){
          margin-top: 5%;
        };
        @media only screen and (max-width: 1030px){
          img{
            height: 60%;
          }
        }
      `}</style>
    </div>
  );
}

export default Customer;
