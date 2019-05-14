import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StateDisplay from './StateDisplay';

function StateContainer(props) {
  const kitchen = props.state.userState.kitchen;
  const pantry = props.state.userState.pantry;
  return(
    <div className='main'>
      <StateDisplay kitchen={kitchen}
        pantry={pantry} />
      <style jsx>{`
        .main {
          background-color: #C7AA71;
          //this width can go away when the grid happens
          width: 280px;
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
