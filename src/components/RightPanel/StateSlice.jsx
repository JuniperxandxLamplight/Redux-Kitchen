import React from 'react';

function StateSlice(props) {
  return(
    <div>
      <h3>{props.slice.id}</h3>
      <p>State =  <br/>
        <span></span>
      </p>
    </div>
  );
}

export default StateSlice;
