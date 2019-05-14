import React from 'react';
import StateDisplay from './StateDisplay';

function StateContainer() {
  return(
    <div className='main'>
      <StateDisplay /> 
      <style jsx>{`
        .main {
          background-color: #C7AA71;
          //this width can go away when the grid happens
          width: 280px;
        }
      `}</style>
    </div>
  )
}

export default StateContainer;