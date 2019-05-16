import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StateDisplay from './StateDisplay';
import ReducerDisplay from './ReducerDisplay';

function StateContainer(props) {
  const servedFood = props.state.userState.servedFood;
  const pantry = props.state.userState.pantry;
  return(
    <div className='state-container'>
      <StateDisplay servedFood={servedFood}
        pantry={pantry} />
      <ReducerDisplay />

      <style jsx>{`
        .state-container {
          margin-top: 15%;
        }
        .main {
          background-color: #C7AA71;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

StateContainer.propTypes = {
  state: PropTypes.object,
};

export default connect(mapStateToProps)(StateContainer);
