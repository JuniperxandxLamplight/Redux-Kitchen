import React from 'react';
import { connect } from 'react-redux';
import StateDisplay from './StateDisplay';

function StateContainer(props) {
  const kitchen = props.state.userState.kitchen;
  const pantry = props.state.userState.pantry;
  return(
    <div className='state-container'>
      <StateDisplay kitchen={kitchen}
                    pantry={pantry} />
      <style jsx>{`
        .state-container {
          margin-top: 15%;
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(StateContainer);
