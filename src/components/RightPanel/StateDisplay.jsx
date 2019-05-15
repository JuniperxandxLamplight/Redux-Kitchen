import React from 'react';

function StateDisplay(props) {
  console.log(props.kitchen)

  return(
    <div className='state-display'>
      <h1>STATE</h1>
        <div className='state-code'>
          <p>State = &#123; <br/>
          <br/>
            <span className='kitchenState'>&nbsp; &nbsp;Kitchen: &#123; <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;waffles: {props.kitchen.waffles}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;biscuits: {props.kitchen.biscuits}, <br/>
              &nbsp; &nbsp; &nbsp; &nbsp;strawberryWaffles: {props.kitchen.strawberryWaffles} <br/>
              &nbsp; &nbsp;&#125;
            </span><br/>
            <br/>
            <span className='pantryState'>&nbsp; &nbsp;Pantry: &#123; <br/>
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
  )
}

export default StateDisplay;
