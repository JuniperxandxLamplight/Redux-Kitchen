import React from 'react';
import PropTypes from 'prop-types';


function StateDisplay(props) {
  console.log(props.kitchen)

  return(
    <div className='state-display'>
      <h1>STATE</h1>
        <div className='state-code'>
          <p>State = &#123; <br/>
          <br/>
            <span className='kitchenState'>&nbsp; &nbsp;Kitchen: &#123; <br/>
  console.log(props.kitchen);

  return(
    <div className="display">
      <h2>State</h2>
      <div>
        <h3></h3>
        <p>State = &#123; <br/>
          <br/>
          <span className="kitchenState">&nbsp; &nbsp;Kitchen: &#123; <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;waffles: {props.kitchen.waffles}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;biscuits: {props.kitchen.biscuits}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;strawberryWaffles: {props.kitchen.strawberryWaffles} <br/>
              &nbsp; &nbsp;&#125;
            </span><br/>
            <br/>
            <span className='pantryState'>&nbsp; &nbsp;Pantry: &#123; <br/>
          </span><br/>
          <br/>
          <span className="pantryState">&nbsp; &nbsp;Pantry: &#123; <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;batter: {props.pantry.batter}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;strawberries: {props.pantry.strawberries}, <br/>
              &nbsp; &nbsp;&#125;
          </span><br/>
          <br/>
            &#125;
        </p>
      </div>
      <style jsx>{`
        .state-display{
          display: flex;
          flex-direction: column;
          align-items: center;
        .display {
          padding: 5px;
          width: 180px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
        .state-code {
          margin-top: 10%;
          width: 65%;
        }
      `}</style>
    </div>
  );
}

StateDisplay.propTypes = {
  kitchen: PropTypes.object,
  pantry: PropTypes.object,
};

export default StateDisplay;
