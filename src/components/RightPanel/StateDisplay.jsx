import React from 'react';
import {UserStateSlices} from './../dummyData';

function StateDisplay() {
  const kitchen = UserStateSlices.Kitchen;
  const pantry = UserStateSlices.Pantry;
  return(
    <div className="display">
      <h2>State</h2>
        <div>
          <h3></h3>
          <p>State = &#123; <br/>
          <br/>
            <span className="kitchenState">&nbsp; &nbsp;Kitchen: &#123; <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;waffles: {kitchen.waffles}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;biscuits: {kitchen.biscuits}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;strawberryWaffles: {kitchen.strawberryWaffles} <br/>
              &nbsp; &nbsp;&#125;
            </span><br/>
            <br/>
            <span className="pantryState">&nbsp; &nbsp;Pantry: &#123; <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;batter: {pantry.batter}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;strawberries: {pantry.strawberries}, <br/>
              &nbsp; &nbsp;&#125;
            </span><br/>
            <br/>
            &#125;
          </p>
        </div>
      <style jsx>{`
        .display {
          padding: 5px;
          //this width can change when grid happens
          width: 180px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default StateDisplay;
