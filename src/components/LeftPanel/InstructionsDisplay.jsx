import React from 'react';
import ReducerDisplay from './ReducerDisplay';

function InstructionsDisplay() {
  return(
    <div className='instructions-display'>
      <h1>INSTRUCTIONS</h1>
      <h3>Day 1 - Start of Day</h3>
      <p>Your type value tells your reducer what action you’re sending it.
        <br/><br/>If you look at your current reducer, the only action type they can take right now is COOK_WAFFLE. Try dispatching it an action with that type!
        <br/><br/>Note: Your reducers are written with switch statements. If you’re not familliar with them, check out this link: (mdn link)</p>

      <ReducerDisplay/>

      <style jsx>{`
        .instructions-display{
          margin-top: 15%;
          padding: 5%;
          text-align: center;
        }
        h3{
          margin: 5% 0 10% 0;
        }
        p{
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default InstructionsDisplay;
