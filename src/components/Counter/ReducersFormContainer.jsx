import React from 'react';
import { dayToggle } from '../../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../../constants';
import Line from './Line';

const {levels} = constants;


function ReducersFormContainer(props){
  function handleReducersSubmit(e) {
    e.preventDefault();
    if (_type.value === levelData[userLevel].answersNight[0] && _input1.value === levelData[userLevel].answersNight[1] && _input2.value === levelData[userLevel].answersNight[2]){
      props.dispatch(dayToggle());
    } else {}
  }
  
  return(
    <div className="reducerForm">
      <form>
        <p>{'function waffleBot(state = initialState, action) {'}</p>
        <p>&nbsp;&nbsp;&nbsp;{'switch(action.type) {'}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'case \'COOK_WAFFLE\':'}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'return {cookedWaffles: cookedWaffles + 1}'}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'case '}
          <input placeholder="action type"></input>
          {':'}
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'return {'}
          <input placeholder="state slice"></input>
          {':'}
          <input placeholder="state slice"></input>
          {' + 1}'}
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
        <p>{'}'}</p>
        <button type="submit">Dispatch</button>
      </form>
    </div>
  );
}

ReducersFormContainer.propTypes = {
  level : PropTypes.number
}

const mapStateToProps = (state) => ({
  level : state.userLevel
});

export default connect(mapStateToProps)(ReducersFormContainer);
