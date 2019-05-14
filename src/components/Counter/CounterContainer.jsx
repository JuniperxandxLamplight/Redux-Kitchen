import React from 'react';
import ActionsForm from './ActionsForm';
import ReducersForm from './ReducersForm';

function CounterContainer() {
  return (
    <div>I'm the counter!
      <ActionsForm/>
      <ReducersForm/>
    </div>
  )
}

export default CounterContainer;
