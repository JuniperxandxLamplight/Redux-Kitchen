import React from 'react';
import StateDisplay from './StateDisplay';

function StateContainer() {
  return(
    <div className='main'>
      <StateDisplay /> 
      <style jsx>{`
        .main {
          background-color: #C7AA71;
          width: 280px;
        }
      `}</style>
    </div>
  )
}

export default StateContainer;