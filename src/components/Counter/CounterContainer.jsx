import React from 'react';
import ActionsForm from './ActionsForm';
import ReducersForm from './ReducersForm';

function CounterContainer() {
  return (
    <div className='counter-container'>
      <ReducersForm/>

        <style jsx>{`
          .counter-container{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
    </div>
  )
}

// <ActionsForm/>

export default CounterContainer;
