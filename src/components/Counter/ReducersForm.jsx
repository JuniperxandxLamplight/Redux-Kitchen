import React from 'react';
import { dayToggle } from '../../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import constants from './../../constants';
import ReactHtmlParser from 'react-html-parser';


const {levels} = constants;


class ReducersForm extends React.Component{
  handleReducersSubmit(e) {
    e.preventDefault();
    if (this.refs.input1.value === levels[this.props.userLevel].answersNight[0] && this.refs.input2.value === levels[this.props.userLevel].answersNight[1] && this.refs.input3.value === levels[this.props.userLevel].answersNight[2]){
      this.props.dispatch(dayToggle());
    } else {
      console.log("nope")
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
