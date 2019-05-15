import React from 'react';
import ReducerDisplay from './ReducerDisplay';

function InstructionsDisplay() {
  return(
    <div className='instructions-display'>
      <h1>INSTRUCTIONS</h1>
      <h3>Day 1 - Start of Day</h3>
      <p>Prep blah blah blahblah</p>
      <p>Clean blah blah blahblah</p>
      <ReducerDisplay/>

      <style jsx>{`
        .instructions-display{
          margin-top: 15%;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default InstructionsDisplay;
