import React from 'react';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
const {levels} = constants;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Line from './Line'

function ActionsForm(props){
  const userLevel = props.userLevel;
  const customer = props.customerCount;
  let _type = null;

  function handleActionSubmission(e) {
    e.preventDefault();
    console.log("here");
    // check for correct answer
    console.log(_type);

    if (_type.value === levels[userLevel].answersDay[(customer - 1)]){
      // check for customer count
      if (customer >= 3) {
        // toggle to night and reset cutomercount to 1
        props.dispatch(dayToggle());
        props.dispatch(userStateChange(levels[userLevel].answersDay[(customer - 1)]))
      } else {
        // go to the next customer
        props.dispatch(nextCustomer());
        props.dispatch(userStateChange(levels[userLevel].answersDay[(customer - 1)]))
      }
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }

    _type.value = '';
  }

  return(
    <div className="container">
      <form onSubmit={handleActionSubmission}>
        {
          levels[userLevel].promptDay.map(function(lineText, index){
            return <Line text={lineText} key={index}/>
          })
        }
        <button type='submit'>Dispatch</button>
      </form>

      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);
