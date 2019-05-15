import React from 'react';
import ReducerDisplay from './ReducerDisplay';
import constants from './../../constants';
import {connect} from 'react-redux';

function InstructionsDisplay(props) {

  const instructions = constants.levelData[props.state.userLevel].dayInstructions.split("*>");

  return(
    <div className='instructions-display'>
      <h1>INSTRUCTIONS</h1>
      <h3>Day {props.state.userLevel}</h3>
      {instructions.map((paragraph) => {
        return <p>{paragraph}</p>
      })}

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
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(InstructionsDisplay);
