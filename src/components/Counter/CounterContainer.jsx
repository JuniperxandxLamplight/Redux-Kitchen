import React from 'react';
import {connect} from 'react-redux';
import { nextCustomer, userStateChange, dayToggle } from './../../actions';
import constants from './../../constants';
import ActionForm from './FormComponents/ActionForm';
import ReducerForm from './FormComponents/ReducerForm';

const {levels} = constants;


class CounterContainer extends React.Component{
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

    let shownForm;
    this.props.dayTime ? shownForm = <ActionForm /> : shownForm = <ReducerForm />;
  console.log(ActionForm)
        
    return(
      <div className='counter-container'>
      {shownForm}

      <style jsx>{`
        .counter-container{
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
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

export default connect(mapStateToProps)(CounterContainer);
