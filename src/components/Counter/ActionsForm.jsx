import React from 'react';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
const {levels} = constants;
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {formStyles, lineStyles, spanStyles, buttonStyles} from './formStyles';

class ActionsForm extends React.Component {
  handleActionSubmission(e) {
    e.preventDefault();
    let quantity;
    console.log("ref", this.refs.input2)

    this.refs.input2 ? quantity = parseInt(this.refs.input2.value) : quantity = 1;
    
    console.log("ref", quantity)

    if (this.refs.input1.value === levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)]){
      if (this.props.customerCount >= 3) {
        console.log("in if", quantity)
        this.props.dispatch(dayToggle());
        this.props.dispatch(userStateChange(levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)], quantity))
      } else {
        console.log("in if", quantity)

        this.props.dispatch(nextCustomer());
        this.props.dispatch(userStateChange(levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)], quantity))
      }
    } else {
      console.log("NOOOOOOO!")
    }

    this.refs.input1.value = '';
  }

render(){
  return(
      <form
        style={formStyles}
        onSubmit={this.handleActionSubmission.bind(this)}>
        {
          levels[this.props.userLevel].promptDay.map(function(lineText, index){
            return <div key={index} style={lineStyles}><span style={spanStyles}>{index + 1}</span>{ReactHtmlParser(lineText)}</div>
          })
        }
        <div style={{textAlign: "center"}}>
          <button style={buttonStyles} type='submit'>Dispatch</button>
        </div>
      </form>
  );
}}


const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
  }
}

export default connect(mapStateToProps)(ActionsForm);
