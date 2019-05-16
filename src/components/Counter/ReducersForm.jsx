import React from 'react';
import { dayToggle } from '../../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../../constants';
import Line from './Line';

const {levels} = constants;


function ReducersForm(props){
  function handleReducersSubmit(e) {
    e.preventDefault();
    if (_type.value === levelData[userLevel].answersNight[0] && _input1.value === levelData[userLevel].answersNight[1] && _input2.value === levelData[userLevel].answersNight[2]){
      props.dispatch(dayToggle());
    } else {}
  }
  
  return(
    <div className="reducerForm">
      {
        levels[props.level].promptNight.map(function(lineText, index) {
          return <Line text={lineText} key={index}/>
        })
      }
    </div>
  );
}

ReducersForm.propTypes = {
  level : PropTypes.number
}

const mapStateToProps = (state) => ({
  level : state.userLevel
});

export default connect(mapStateToProps)(ReducersForm);
