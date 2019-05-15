import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import constants from './../../constants';
const {levels} = constants;

import Line from './Line';

function ReducersForm(props){
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
