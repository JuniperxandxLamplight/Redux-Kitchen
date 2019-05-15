import React from 'react';
import PropTypes from 'prop-types';


function StateDisplay(props) {
  console.log(props.servedFood)

  return(
    <div className='state-display'>
      <h1>STATE</h1>
      <div className='state-code'>
        <p>State = &#123; <br/><br/>
        <span className="servedFoodState">&nbsp; &nbsp;ServedFood: &#123; <br/>
            &nbsp; &nbsp; &nbsp; &nbsp;waffles: {props.servedFood.waffles}, <br/>
            &nbsp; &nbsp; &nbsp; &nbsp;biscuits: {props.servedFood.biscuits}, <br/>
            &nbsp; &nbsp; &nbsp; &nbsp;strawberryWaffles: {props.servedFood.strawberryWaffles} <br/>
            &nbsp; &nbsp;&#125;
          </span><br/><br/>
          <span className="pantryState">&nbsp; &nbsp;Pantry: &#123; <br/>
            &nbsp; &nbsp; &nbsp; &nbsp;batter: {props.pantry.batter}, <br/>
            &nbsp; &nbsp; &nbsp; &nbsp;strawberries: {props.pantry.strawberries}, <br/>
            &nbsp; &nbsp;&#125;
        </span><br/><br/>&#125;
        </p>
      </div>
      <style jsx>{`
        .state-display{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
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
  servedFood: PropTypes.object,
  pantry: PropTypes.object,
};

export default StateDisplay;
