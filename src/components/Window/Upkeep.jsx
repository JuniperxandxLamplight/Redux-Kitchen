import React from 'react';
import waffle from './../../assets/images/waffle.png';
import syrup from './../../assets/images/syrup.png';

function Upkeep(){
  return(
    <div>
      <img className="waffle" src={waffle} alt="waffle"/>
      <img className="syrup" src={syrup} />
      <style jsx>{`
        div{
          width: 400px;
          height: auto;
          display: grid;
          grid-template: 1fr 2fr 4fr / 1fr 2fr 4fr;
        };
        .waffle{
          z-index: 1;
          width: 100%;
          height: auto;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
        };
        .syrup{
          width: 100%;
          height: auto;
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 4;
        }
      `}</style>
    </div>
  );
}

export default Upkeep;
