import React from 'react';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
const {levels} = constants;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class ActionsForm extends React.Component {
  handleActionSubmission(e) {
    e.preventDefault();
    console.log(this.refs);
    console.log(this.props.customerCount)

    if (this.refs.input1.value === levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)]){
      if (this.props.customerCount >= 3) {
        this.props.dispatch(dayToggle());
        this.props.dispatch(userStateChange(levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)]))
      } else {
        this.props.dispatch(nextCustomer());
        this.props.dispatch(userStateChange(levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)]))
      }
    } else {
      console.log("NOOOOOOO!")
    }

    this.refs.input1.value = '';
  }

render(){
  return(
    <div className="container">
      <form onSubmit={this.handleActionSubmission.bind(this)}>
        {
          levels[this.props.userLevel].promptDay.map(function(lineText, index){
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
