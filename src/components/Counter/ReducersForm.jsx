import React from 'react';
import { dayToggle, levelUp } from '../../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../../constants';
import ReactHtmlParser from 'react-html-parser';
const {levels} = constants;


class ReducersForm extends React.Component{
  handleReducersSubmit(e) {
    e.preventDefault();
    let answerIsTrue = [];
    let userInputs = [...Object.keys(this.refs)]
    let answers = levels[this.props.userLevel].answersNight;
    for (let i=0; i < answers.length; i++) {
      if(this.refs[userInputs[i]].value === answers[i]) {
        answerIsTrue.push(true)
      } else {
        answerIsTrue.push(false)
      }
    }
    answerIsTrue = answerIsTrue.every((bool)=>(bool===true))
    console.log(answerIsTrue)
    if (answerIsTrue) {
      this.props.dispatch(dayToggle());
      this.props.dispatch(levelUp());
    }
  }


  render() {
    return(
      <div className="reducerForm">
        <form onSubmit={this.handleReducersSubmit.bind(this)}>
        {
          levels[this.props.userLevel].promptNight.map(function(lineText, index){
            return <div key={index}>{ReactHtmlParser(lineText)}</div>
          })
        }
        <button type='submit'>Update Reducer</button>
      </form>
      </div>
    );
  }
}

ReducersForm.propTypes = {
  level : PropTypes.number
}

const mapStateToProps = (state) => ({
  userLevel: state.userLevel,
  customerCount: state.customerCount,
});

export default connect(mapStateToProps)(ReducersForm);
