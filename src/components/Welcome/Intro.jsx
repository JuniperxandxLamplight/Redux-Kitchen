import React from 'react';
import {Link} from 'react-router-dom';
import waffle from './../../assets/images/waffle.png';
import syrup from './../../assets/images/syrup.png';

function Intro(){

  return(
    <div>
      <img className="waffle" src={waffle} alt="waffle"/>
      <img className="syrup" src={syrup} />
      <div className="instructions">
        <p>Your Grandma has decided to retire and is leaving her mysterious robot waffle restaurant in your hands. She’s run off to the Bahamas, but not before leaving notes behind for you to carry on the business without a hitch.</p>
        <p>Here’s how your new business works:</p>
        <p>You have a store that has been created for you by your grandma. This is your kitchen. It holds your inventory.</p>
        <p>In your store, your have a reducer. This is your waffle robot. He can change your inventory. He reads actions you give him to know what to do. </p>
        <p>Lastly, you have actions. These are your order tickets that you give to your reducer. When your reducer receives an action, he will do whatever the action tells him.</p>
        <Link style={{textDecoration: 'none'}} to="/game"><h2>Next</h2></Link>
      </div>
      <style jsx>{`
        div{
          width: 100%;
          height: 100%;
          display: grid;
          grid-template: 1fr 2fr 10fr / 1fr 2fr 10fr;
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
          height: 100%;
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 4;
        };
        .instructions{
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 4;
        };
        p{
          width: 76%;
          margin-left: 12%;
        };
        h2{
          color: black;
          border: 2px solid black;
          padding: 5px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default Intro;
