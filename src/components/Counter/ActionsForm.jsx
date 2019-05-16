import React from 'react';
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
const {levels} = constants;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Line from './Line';
import ReactHtmlParser from 'react-html-parser';

class ActionsForm extends React.Component {
  constructor(props){
    super(props);
    this.userLevel = props.userLevel;
    this.customer = props.customerCount;
    this._type = null;
  }


  handleActionSubmission(e) {
    e.preventDefault();
    console.log("here");
    // check for correct answer
    console.log(this.refs);

    if (this.refs.input1.value === levels[this.userLevel].answersDay[(this.customer - 1)]){
      // check for this.customer count
      if (this.customer >= 3) {
        // toggle to night and reset cutomercount to 1
        this.props.dispatch(dayToggle());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.customer - 1)]))
      } else {
        // go to the next customer
        this.props.dispatch(nextCustomer());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.customer - 1)]))
      }
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }

    this.refs.input1.value = '';
  }
render(){
  return(
    <div className="container">
      <form onSubmit={this.handleActionSubmission.bind(this)}>
        {
          levels[this.userLevel].promptDay.map(function(lineText, index){
            return <div key={index}>{ReactHtmlParser(lineText)}</div>
          })
        }
        <button type='submit'>Dispatch</button>
      </form>


    </div>
  );
}}


const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);
