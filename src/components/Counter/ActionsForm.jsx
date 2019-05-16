import React from 'react';
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
import ActionDayOne from './FormComponents/ActionDayOne';

const { levels } = constants;



class ActionsForm extends React.Component{
  constructor(props){
    super(props);
    this.userLevel = props.userLevel;
    this.customerCount = props.customerCount;
    this.dayTime = props.dayTime;
    this.handleActionSubmission = this.handleActionSubmission.bind(this);
  }
  


  handleActionSubmission(userAnswer) {
    console.log("cutomer#", this.props.customerCount)
    
    // check for correct answer
    if (userAnswer === levels[this.props.userLevel].answersDay[(this.props.customerCount - 1)]){
      // check for customer count
      if (this.props.customerCount >= 3) {
        // toggle to night and reset cutomercount to 1
        this.props.dispatch(dayToggle());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.props.customerCount - 1)]))
      } else {
        // go to the next customer
        this.props.dispatch(nextCustomer());
        this.props.dispatch(userStateChange(levels[this.userLevel].answersDay[(this.props.customerCount - 1)]))
      }
    } else {
      // Do some animation
      console.log("NOOOOOOO!")
    }
  }

  render(){
    console.log(this.props.dayTime);
    let form;
    if (this.props.dayTime) {
      form = <ActionDayOne onActionSubmission={this.handleActionSubmission}/>
    } else {
      form = "";
    }
   
    return(
      <div>
        {form}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    userLevel: state.userLevel,
    customerCount: state.customerCount,
    dayTime: state.dayTime,
  }
}

export default connect(mapStateToProps)(ActionsForm);

